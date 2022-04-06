"use strict";

const Express = require("express");
const App = Express();
const HTTP = require("http");
const Utilities = require("./utilities");
const WorkerCon = require("./worker-pool/controller");

// Router Setup
App.get("/:id", async (req, res) => {
  const id = req.params.id;
  let result = null;
  let workerPool = null;

  workerPool = WorkerCon.get();
  result = await workerPool.upData(id);

  res.send(result);
});

// Server Setup
const port = 8080;
const server = HTTP.createServer(App);

(async () => {
  // Init Worker Pool
  const options = { minWorkers: "max" };
  await WorkerCon.init(options);

  // Start Server
  server.listen(port, () => {
    console.log("NodeJS Performance Optimizations listening on: ", port);
  });
})();
