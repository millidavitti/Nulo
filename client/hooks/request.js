import connectdb from '../serverless/db/connect'
import destinationDB from '../serverless/models/destinations.mongo'
import hotelDB from '../serverless/models/hotels.mongo'
import countryDB from '../serverless/models/countries.mongo'

async function pollDestinations() {
 connectdb()
 const data = await destinationDB
  .find(
   {
    'name.content': {
     $in: ['Dubai', 'Tokyo', 'Maldive', 'Bali', 'London', 'Rome'],
    },
   },
   {
    name: 1,
    code: 1,
    thumb: 1,
    isoCode: 1,
   }
  )
  .limit(10)
 return JSON.stringify(data)
}

async function pollHotels(destinationCode) {
 connectdb()
 const data = await hotelDB
  .find(
   { destinationCode },
   { name: 1, address: 1, rooms: 1, countryCode: 1, code: 1 }
  )
  .limit(12)

 return JSON.stringify(data)
}

async function pollCountry(isoCode) {
 connectdb()
 const data = await countryDB.findOne({ isoCode }, { description: 1 })
 return JSON.stringify(data)
}

export { pollDestinations, pollHotels, pollCountry }
