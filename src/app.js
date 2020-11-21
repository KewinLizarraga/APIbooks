const express = require('express');
const app = express();

const route = require('./routes');
const passport = require('./config/passport.config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize())
app.use('/api', route);

module.exports = app;
