const route = require('express').Router();

const userRoutes = require('./user.routes');
const bookRoutes = require('./book.routes');

route.use('/user', userRoutes);
route.use('/book', bookRoutes);

module.exports = route;
