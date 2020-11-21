const router = require('express').Router();

const { Auth } = require('../middlewares');
const { userControllers } = require('../controllers');

router.post('/signup', userControllers.signup);
router.post('/login', userControllers.login);
// router.post('/logout', userControllers.logout);
router.get('/profile', Auth.authenticate, userControllers.profile);

module.exports = router;
