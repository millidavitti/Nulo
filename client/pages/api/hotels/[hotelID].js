const express = require('express')
const connectdb = require('../../../serverless/db/connect')
const hotelDB = require('../../../serverless/models/hotels.mongo')

const api = express()
const router = express.Router()

router.get('/:hotelID', async (req, res) => {
 connectdb()
 const { hotelID } = req.params

 const hotels = await hotelDB.findOne({ code: parseInt(hotelID) }, { __v: 0 })
 res.json(hotels)
})

router.post('/:hotelID', async (req, res) => {
 connectdb()
 const { hotelID } = req.params
 const { projection } = req.body

 const hotel = await hotelDB.findOne({ code: parseInt(hotelID) }, projection)
 res.json(hotel)
})

export default api.use('/api/hotels', router)
