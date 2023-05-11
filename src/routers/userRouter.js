const express = require('express');

const router = express.Router();

const { validateUser } = require('../middleware/userMiddleware');
const userController = require('../controllers/userController');

router.post('/', validateUser, userController);

module.exports = router;