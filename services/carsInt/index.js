const express = require("express");
const fs = require("fs");

const db = require('./database');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
//database connectivity
app.use(cors());
db.connect((err) => {
  if(err) {
      throw err;  
  }
  console.log("database is connected ")
} )

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Server is Up",
    data: {},
  });
});

app.get("/cars", (req, res, next) => {

  let sqlshow_show_data = "SELECT * FROM cars ";
  let query = db.query(sqlshow_show_data,  (err, cars_results) => {
      if (err) throw err;
      res.status(200).json({
        status: "success",
        message: "All the cars and their info",
        data: cars_results,
      });
  });
});

app.get("/cars/:id", (req, res, next) => {
  
  var car_id = req.params.id
  let sqlshow_show_data = "SELECT * FROM cars WHERE id = ? ";
  let query = db.query(sqlshow_show_data, [car_id], (err, found) => {
      if (err) throw err;

      if (!found || found == []) {
        res.status(404).json({
          status: "failed",
          message: `Failed to find the car with id ${req.params.id}`,
          data: {},
        });
      }   
      res.status(200).json({
        status: "success",
        message: "",
        data: found[0],
      });
  });
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
