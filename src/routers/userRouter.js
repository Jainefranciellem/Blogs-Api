const express = require('express');

const router = express.Router();

const { validateUser, validateEmailAndName } = require('../middleware/userMiddleware');
const userController = require('../controllers/userController');
const { validateToken } = require('../middleware/authMiddleware');

router.post('/', validateUser, validateEmailAndName, userController.createdUser);
router.get('/', validateToken, userController.getAllUser);

module.exports = router;