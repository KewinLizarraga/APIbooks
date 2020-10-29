const express = require("express");
const path = require("path");

const app = express();

const route = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/api', route)

module.exports = app;
