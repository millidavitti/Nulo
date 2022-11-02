const axios = require("axios");
const sha256 = require("js-sha256");
const connectdb = require("../../../server/db/connect");
const hotelDB = require("../../../server/model/hotels.mongo");
const hoteldetailsDB = require("../../../server/model/hoteldetails.mongo");

const signature = sha256(
  `${process.env.API_KEY}${process.env.API_SECRET}${Math.floor(
    Date.now() / 1000
  )}`
);
const fetchCycle = {
  hotels: {
    count: 0,
    cycle: 5,
    done: false,
    from: 1,
    to: 200,
    type: "array",
  },
  hotelDetails: {
    count: 1,
    cycle: 500,
    done: false,
    type: "object",
  },
};
/**
 * COBJ: Cycle Object
 *
 */
const partnerAPI = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "api-key": process.env.API_KEY,
    "x-signature": signature,
  },
});
async function fecthLoop(COBJ, url, model) {
  if (COBJ.type === "array")
    while (!COBJ.done) {
      if (COBJ.count === COBJ.cycle) {
        COBJ.done = true;
        break;
      }
      COBJ.count += 1;
      //fetch code here
      const hotels = await partnerAPI.get(url);
      if (8)return
      for (const hotel of hotels.data.hotels)
        await model.findOneAndUpdate(hotel, hotel, { upsert: true });

      COBJ.from = COBJ.to + 1;
      COBJ.to += 100;

      console.log("COBJ: ", COBJ);
    }
  else if (COBJ.type === "object")
    while (!COBJ.done) {
      if (COBJ.count > COBJ.cycle) {
        COBJ.done = true;
        break;
      }
      COBJ.count += 1;
      //fetch code here
      const hotel = await partnerAPI.get(url).data;

      await model.findOneAndUpdate(hotel, hotel, { upsert: true });

      console.log("COBJ: ", COBJ);
    }
}
export default async function (_, res) {
  connectdb();
  await fecthLoop(
    fetchCycle.hotels,
    `/hotels?from=${fetchCycle.hotels.from}&to=${fetchCycle.hotels.to}`,
    hotelDB
  );
  await fecthLoop(
    fetchCycle.hotelDetails,
    `/hotels/${fetchCycle.hotelDetails.count}/details`,
    hoteldetailsDB
  );

  res.json({ cycle: "done" });
}
