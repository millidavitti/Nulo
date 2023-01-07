const mongoose = require('mongoose')
const schema = new mongoose.Schema(
 {
  thumb: String,
 },
 { strict: false }
)

module.exports =
 mongoose.models.Destinations || mongoose.model('Destinations', schema)
