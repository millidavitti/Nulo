const path = require("path");
const fs = require("fs");
const EventEmitter = require("events");
const connectdb = require("../../../server/db/connect");
const {
  hotelsDB,
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
  ratecommentdetailsDB,
} = require("../../../server/model/collections.mongo");
const { batch, FetchCycle, Url } = require("../../../server/utils/cronFn");

const events = new EventEmitter();

function init(events) {
  // Hotels
  events.on("hotels", async (cycle, url, db) => {
    console.log("Polling Hotels...");
    await batch(cycle, url, db);
    events.emit(
      "countries",
      new FetchCycle(5),
      new Url("/locations/countries", 1, 200),
      destinationsDB
    );
  });
  // Locations
  events.on("countries", async (cycle, url, db) => {
    console.log("Polling Countries...");
    await batch(cycle, url, db);
    events.emit(
      "destinations",
      new FetchCycle(5),
      new Url("/locations/destinations", 1, 200),
      destinationsDB
    );
  });
  events.on("destinations", async (cycle, url, db) => {
    console.log("Polling Destinations...");
    await batch(cycle, url, db);
    events.emit(
      "rooms",
      new FetchCycle(3),
      new Url("/types/rooms", 1, 200),
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
      new Url("/types/boards", 1, 200),
      boardsDB
    );
  });
  events.on("boards", async (cycle, url, db) => {
    console.log("Polling Boards...");
    await batch(cycle, url, db);
    events.emit(
      "accommodations",
      new FetchCycle(1),
      new Url("/types/accommodations", 1, 200),
      accommodationsDB
    );
  });
  events.on("accommodations", async (cycle, url, db) => {
    console.log("Polling Accommodations...");
    await batch(cycle, url, db);
    events.emit(
      "categories",
      new FetchCycle(1),
      new Url("/types/categories", 1, 200),
      categoriesDB
    );
  });
  events.on("categories", async (cycle, url, db) => {
    console.log("Polling Categories...");
    await batch(cycle, url, db);
    events.emit(
      "chains",
      new FetchCycle(2),
      new Url("/types/chains", 1, 200),
      chainsDB
    );
  });
  events.on("chains", async (cycle, url, db) => {
    console.log("Polling Chains...");
    await batch(cycle, url, db);
    events.emit(
      "facilities",
      new FetchCycle(1),
      new Url("/types/facilities", 1, 200),
      facilitiesDB
    );
  });
  events.on("facilities", async (cycle, url, db) => {
    console.log("Polling Facilities...");
    await batch(cycle, url, db);
    events.emit(
      "facilitygroups",
      new FetchCycle(1),
      new Url("/types/facilitygroups", 1, 200),
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
      new Url("/types/languages", 1, 200),
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
      new Url("/types/segments", 1, 200),
      segmentsDB
    );
  });
  events.on("segments", async (cycle, url, db) => {
    console.log("Polling Segments...");
    await batch(cycle, url, db);
    events.emit(
      "imagetypes",
      new FetchCycle(1),
      new Url("/types/imagetypes", 1, 200),
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
      new FetchCycle(1),
      new Url("/types/terminals", 1, 200),
      terminalsDB
    );
  });
  events.on("terminals", async (cycle, url, db) => {
    console.log("Polling Terminals...");
    await batch(cycle, url, db);
    events.emit(
      "ratecomments",
      new FetchCycle(1),
      new Url("/types/ratecomments", 1, 200),
      ratecommentdetailsDB
    );
  });
  events.on("ratecomments", async (cycle, url, db) => {
    console.log("Polling Ratecomments...");
    await batch(cycle, url, db);
    events.emit("done");
  });
  events.on("done", async () => {
    fs.writeFileSync(
      path.join(__dirname, "lastUpdateTime.json"),
      JSON.stringify({ lastUpdate: Date.now() })
    );
    events.removeAllListeners();
    console.log("Done Batching!");
  });

  events.emit(
    "hotels",
    new FetchCycle(2),
    new Url("/hotels", 1, 200),
    hotelsDB
  );
}

export default async function batchProcess(_, res) {
  connectdb();
  init(events);
  res.json({ cycle: "Batching in progress..." });
}
