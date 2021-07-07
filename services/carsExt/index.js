const express = require("express");
const axios = require("axios");
const { CARS_API } = require("./constants");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Server is Up",
    data: {},
  });
});

app.get("/cars", async (req, res) => {
  if (!req.query.hasOwnProperty("id")) {
    console.log(`Calling ${CARS_API}`);
    try {
      const res1 = await axios.get(CARS_API);
      return res.status(200).json(res1.data);
    } catch (e) {
      console.log("Failed to load the resource", e);
      return res.status(500).json({
        status: "failed",
        message: "Internal Server Error",
        data: {},
      });
    }
  }

  try {
    const res1 = await axios.get(`${CARS_API}/${req.query.id}`);
    return res.status(200).json(res1.data);
  } catch (e) {
    return res.status(404).json({
      status: "failed",
      message: `Failed to find the car with id ${req.query.id}`,
      data: {},
    });
  }
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

const port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  switch (error.code) {
    case "EACCES":
      process.exit(1);
    case "EADDRINUSE":
      process.exit(1);
    default:
      throw error;
  }
}

app.listen(port, () => {
  console.log(`🚀 Server started on PORT:${port}`);
});
app.on("error", onError);
