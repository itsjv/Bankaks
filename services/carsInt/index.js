const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Server is Up",
    data: {},
  });
});

app.get("/cars", (req, res, next) => {
  const rawdata = fs.readFileSync("data.json");

  const data = JSON.parse(rawdata);

  res.status(200).json({
    status: "success",
    message: "",
    data: data.cars,
  });
});

app.get("/cars/:id", (req, res, next) => {
  const rawdata = fs.readFileSync("data.json");

  const data = JSON.parse(rawdata);

  const found = data.cars.find((car) => {
    return car.id === req.params.id;
  });

  if (!found) {
    res.status(404).json({
      status: "failed",
      message: `Failed to find the car with id ${req.params.id}`,
      data: {},
    });
  }

  res.status(200).json({
    status: "success",
    message: "",
    data: found,
  });
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

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  switch (error.code) {
    case "EACCES":
      process.exit(1);
      break;
    case "EADDRINUSE":
      process.exit(1);
      break;
    default:
      throw error;
  }
}

app.listen(port, () => {
  console.log(`🚀 Server started on PORT:${port}`);
});
app.on("error", onError);
