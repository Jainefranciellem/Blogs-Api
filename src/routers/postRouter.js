const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');
const { validateToken } = require('../middleware/authMiddleware');
const validatePost = require('../middleware/postMiddleware');

router.get('/', validateToken, postController.getAllPosts);
router.post('/', validateToken, validatePost, postController.create);

module.exports = router;