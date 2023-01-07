const express = require('express')
const connectdb = require('../../../serverless/db/connect')
const hotelDB = require('../../../serverless/models/hotels.mongo')

const api = express()
const router = express.Router()

router.post('/hotels', async (req, res) => {
 connectdb()
 const { filters, pag, projection } = req.body

 const hotels = await hotelDB
  .find(filters, projection)
  .skip(parseInt(pag?.from) || 0)
  .limit(parseInt(pag?.limit) || 10)

 res.json(hotels)
})
export default api.use('/api', router)
