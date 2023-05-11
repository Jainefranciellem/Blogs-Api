const express = require('express');

const router = express.Router();

const { validateUser, validateEmailAndName } = require('../middleware/userMiddleware');
const userController = require('../controllers/userController');

router.post('/', validateUser, validateEmailAndName, userController);

module.exports = router;