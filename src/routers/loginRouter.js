const express = require('express');

const router = express.Router();

const { validateLogin } = require('../middleware/loginMiddleware');
const loginController = require('../controllers/loginController');

router.post('/', validateLogin, loginController);

module.exports = router;