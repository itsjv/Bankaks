require("dotenv").config();
const mysql = require('mysql')

var db = mysql.createConnection({
  multipleStatements: true,
  host: "project.cpvf71ejomwc.us-east-1.rds.amazonaws.com",
  user: "project",
  port:3306,
  password: "Project123",
  database: "bankaks"
  });

module.exports =db;