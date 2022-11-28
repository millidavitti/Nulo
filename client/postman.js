const axios = require('axios')

axios.post('https://hdtje5-3000.preview.csb.app/api/locations/destinations', {
 filters: {
  'name.content': { $in: ['Singapore', 'New York', 'Tropojës', 'Zaire'] },
 },
 projection: {
  name: 1,
  code: 1,
  isoCode: 1,
 },
})
//  .then((res) => console.log(res.data))

axios
 .get('https://hdtje5-3000.preview.csb.app/api/hotels/1')
 //  .then((res) => console.log(res.data))
 .catch((err) => console.log(err.message))

axios.post('https://hdtje5-3000.preview.csb.app/api/hotels', {
 filters: {
  $or: [
   { countryCode: { $in: ['AL', 'AO', 'Tropojës', 'Zaire'] } },
   { destinationCode: { $in: ['01H', 'ACE', 'Tropojës', 'Zaire'] } },
  ],
 },
 projection: {
  name: 1,
  destinationCode: 1,
  countryCode: 1,
  isoCode: 1,
 },
})
//  .then((res) => console.log(res.data, res.data.length))

axios['post']('https://hdtje5-3000.preview.csb.app/api/hotels/7', {
 projection: {
  name: 1,
  destinationCode: 1,
  //   countryCode: 1,
  email: 1,
 },
}).then((res) => console.log(res.data))
