const EventEmitter = require("events");
const { createScheduledFunction } = require("inngest");
const connectdb = require("../server/db/connect");
import lastUpdateTimeMongo from "../server/models/lastUpdateTime.mongo";
const {
  hotelsDB,
  countriesDB,
  destinationsDB,
  roomsDB,
  boardsDB,
  accommodationsDB,
  categoriesDB,
  chainsDB,
  facilitiesDB,
  facilitygroupsDB,
  issuesDB,
  languagesDB,
  promotionsDB,
  segmentsDB,
  imagetypesDB,
  currenciesDB,
  terminalsDB,
  ratecommentsDB,
} = require("../server/models/collections.mongo");
const { batch, FetchCycle, Url } = require("../server/utils/cronFn");

const events = new EventEmitter();

function init(events) {
  connectdb();
  // Hotels
  events.on("hotels", async (cycle, url, db) => {
    console.log("Polling Hotels...");
    await batch(cycle, url, db);
    events.emit(
      "countries",
      new FetchCycle(1),
      new Url("/locations/countries", 1, 500),
      countriesDB
    );
  });
  // Locations
  events.on("countries", async (cycle, url, db) => {
    console.log("Polling Countries...");
    await batch(cycle, url, db);
    events.emit(
      "destinations",
      new FetchCycle(7),
      new Url("/locations/destinations", 1, 1),
      destinationsDB
    );
  });
  events.on("destinations", async (cycle, url, db) => {
    console.log("Polling Destinations...");
    await batch(cycle, url, db);
    events.emit(
      "rooms",
      new FetchCycle(13),
      new Url("/types/rooms", 1, 1),
      roomsDB
    );
  });
  // Types
  events.on("rooms", async (cycle, url, db) => {
    console.log("Polling Rooms...");
    await batch(cycle, url, db);
    events.emit(
      "boards",
      new FetchCycle(1),
      new Url("/types/boards", 1, 100),
      boardsDB
    );
  });
  events.on("boards", async (cycle, url, db) => {
    console.log("Polling Boards...");
    await batch(cycle, url, db);
    events.emit(
      "accommodations",
      new FetchCycle(1),
      new Url("/types/accommodations", 1, 100),
      accommodationsDB
    );
  });
  events.on("accommodations", async (cycle, url, db) => {
    console.log("Polling Accommodations...");
    await batch(cycle, url, db);
    events.emit(
      "categories",
      new FetchCycle(1),
      new Url("/types/categories", 1, 100),
      categoriesDB
    );
  });
  events.on("categories", async (cycle, url, db) => {
    console.log("Polling Categories...");
    await batch(cycle, url, db);
    events.emit(
      "chains",
      new FetchCycle(3),
      new Url("/types/chains", 1, 1),
      chainsDB
    );
  });
  events.on("chains", async (cycle, url, db) => {
    console.log("Polling Chains...");
    await batch(cycle, url, db);
    events.emit(
      "facilities",
      new FetchCycle(1),
      new Url("/types/facilities", 1, 1),
      facilitiesDB
    );
  });
  events.on("facilities", async (cycle, url, db) => {
    console.log("Polling Facilities...");
    await batch(cycle, url, db);
    events.emit(
      "facilitygroups",
      new FetchCycle(1),
      new Url("/types/facilitygroups", 1, 100),
      facilitygroupsDB
    );
  });
  events.on("facilitygroups", async (cycle, url, db) => {
    console.log("Polling Facilitygroups...");
    await batch(cycle, url, db);
    events.emit(
      "issues",
      new FetchCycle(1),
      new Url("/types/issues", 1, 200),
      issuesDB
    );
  });
  events.on("issues", async (cycle, url, db) => {
    console.log("Polling Issues...");
    await batch(cycle, url, db);
    events.emit(
      "languages",
      new FetchCycle(1),
      new Url("/types/languages", 1, 100),
      languagesDB
    );
  });
  events.on("languages", async (cycle, url, db) => {
    console.log("Polling Languages...");
    await batch(cycle, url, db);
    events.emit(
      "promotions",
      new FetchCycle(1),
      new Url("/types/promotions", 1, 200),
      promotionsDB
    );
  });
  events.on("promotions", async (cycle, url, db) => {
    console.log("Polling Promotions...");
    await batch(cycle, url, db);
    events.emit(
      "segments",
      new FetchCycle(1),
      new Url("/types/segments", 1, 100),
      segmentsDB
    );
  });
  events.on("segments", async (cycle, url, db) => {
    console.log("Polling Segments...");
    await batch(cycle, url, db);
    events.emit(
      "imagetypes",
      new FetchCycle(1),
      new Url("/types/imagetypes", 1, 100),
      imagetypesDB
    );
  });
  events.on("imagetypes", async (cycle, url, db) => {
    console.log("Polling Imagetypes...");
    await batch(cycle, url, db);
    events.emit(
      "currencies",
      new FetchCycle(1),
      new Url("/types/currencies", 1, 200),
      currenciesDB
    );
  });
  events.on("currencies", async (cycle, url, db) => {
    console.log("Polling Currencies...");
    await batch(cycle, url, db);
    events.emit(
      "terminals",
      new FetchCycle(2),
      new Url("/types/terminals", 1, 1),
      terminalsDB
    );
  });
  events.on("terminals", async (cycle, url, db) => {
    console.log("Polling Terminals...");
    await batch(cycle, url, db);
    events.emit(
      "ratecomments",
      new FetchCycle(100),
      new Url("/types/ratecomments", 1, 1),
      ratecommentsDB
    );
  });
  events.on("ratecomments", async (cycle, url, db) => {
    console.log("Polling Ratecomments...");
    await batch(cycle, url, db);
    events.emit("done");
  });
  events.on("done", async () => {
    await lastUpdateTimeMongo.findOneAndUpdate(
      { lastUpdate: Date.now() },
      { lastUpdate: Date.now() },
      { upsert: true }
    );
    events.removeAllListeners();
    console.log("Done Batching!");
  });

  events.emit("hotels", new FetchCycle(1), new Url("/hotels", 1, 5), hotelsDB);
}

module.exports = createScheduledFunction(
  "Batch Process",
  "0 0 * * *",
  init.bind(null, events)
);
