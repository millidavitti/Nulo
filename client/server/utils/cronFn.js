const axios = require("axios");
const sha256 = require("js-sha256");
const path = require("path");
const lastUpdateTime = require("../models/lastUpdateTime.mongo");
const signature = () =>
  sha256(
    `${process.env.API_KEY}${process.env.API_SECRET}${Math.floor(
      Date.now() / 1000
    )}`
  );

//Batch
async function batch(fetchCycle, urlObj, model) {
  while (!fetchCycle.done) {
    if (fetchCycle.count === fetchCycle.cycle) {
      fetchCycle.done = true;
      console.log("Cycle Complete");
      break;
    }
    // Axios Instance: Partner API
    const partnerAPI = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        "api-key": process.env.API_KEY,
        "x-signature": signature(),
      },
    });
    // Last Update
    const [{ lastUpdate }] = await lastUpdateTime
      .find()
      .sort({ lastUpdate: -1 });

    const date = `${new Date(lastUpdate).getFullYear()}-${new Date(
      lastUpdate
    ).getMonth()}-${`${new Date(lastUpdate).getDate()}`.padStart(2, "0")}`;

    console.log(urlObj.query.from, urlObj.query.to, lastUpdate);

    fetchCycle.iCount = fetchCycle.count + 1;

    //fetch code here
    const response = await partnerAPI.get(
      `${urlObj.url}${urlObj.query && "?"}${
        urlObj.query.from && `&from=${urlObj.query.from}`
      }${urlObj.query.to && `&to=${urlObj.query.to}`}${
        lastUpdate ? `&lastUpdateTime=${date}` : ""
      }`
    );

    function resKeys() {
      return Object.keys(response.data);
    }
    console.log("endpoint: ", resKeys().at(-1), path.sep);
    for (const data of response.data[resKeys().at(-1)])
      await model.findOneAndUpdate(data, data, { upsert: true });

    urlObj.query.from = urlObj.query.to + 1;
    urlObj.query.to += urlObj.interval;
  }
}
class FetchCycle {
  /**
   * @param {number} cycle
   */
  constructor(cycle) {
    (this.count = 0), (this.cycle = cycle), (this.isDone = false);
  }
  /**
   * @param {number} count
   * @param {Boolean} boolean
   */
  set iCount(count) {
    this.count = count;
  }
  /**
   * @param {Boolean} boolean
   */
  set done(boolean) {
    this.isDone = boolean;
  }
}

class Url {
  /**
   * @param {string} url
   * @param {number} from
   * @param {number} to
   */
  constructor(url, from, to) {
    (this.url = url),
      (this.query = {
        from,
        to,
      }),
      (this.interval = to);
  }
  /**
   * @param {number} int
   */
  set iInterval(int) {
    this.interval = int;
  }
}

module.exports = {
  batch,
  FetchCycle,
  Url,
};
