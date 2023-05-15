const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');
const validateToken = require('../middleware/authMiddleware');

router.post('/', validateToken, categoryController.createdCategory);
router.get('/', validateToken, categoryController.getAllCategories);

module.exports = router;