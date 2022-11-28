const express = require('express')
const connectdb = require('../../../serverless/db/connect')
const destinationDB = require('../../../serverless/models/destinations.mongo')
const parseQuery = require('../../../serverless/utils/parseQuery')

const router = express.Router()

const api = express()

router.get('/destinations', async (req, res) => {
 connectdb()
 const { filters, pag } = parseQuery(req.query)
 
 const destinations = await destinationDB
  .find(filters, { __v: 0 })
  .skip(+pag.from || 0)
  .limit(+pag.limit || 10)

 res.json(destinations)
})

router.post('/destinations', async (req, res) => {
 connectdb()
 const { filters, pag, projection } = req.body

 const destinations = await destinationDB
  .find(filters, projection)
  .skip(parseInt(pag?.from) || 0)
  .limit(parseInt(pag?.limit) || 5)

 res.json(destinations)
})

export default api.use('/api/locations', router)
