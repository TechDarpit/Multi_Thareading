"use strict";

const WorkerPool = require("workerpool");
const Utilities = require("../utilities");

// MIDDLEWARE FUNCTIONS
const upData = (password) => {
  return Utilities.updateData(password);
};

// CREATE WORKERS
WorkerPool.worker({
  upData,
});
