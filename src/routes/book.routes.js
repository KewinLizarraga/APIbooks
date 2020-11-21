const route = require('express').Router();

const { Auth } = require('../middlewares');
const { bookControllers } = require('../controllers');

route.get('/', bookControllers.listAll);
route.get('/pag/:page', bookControllers.listByPage);
route.get('/:_id', bookControllers.listOne);
route.post('/', Auth.authenticate, bookControllers.create);
route.put('/:_id', Auth.authenticate, bookControllers.update);
route.delete('/:_id', Auth.authenticate, bookControllers.delete);

module.exports = route;
