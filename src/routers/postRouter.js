const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');
const validateToken = require('../middleware/authMiddleware');
const validateupdate = require('../middleware/updateMidleware');
const validatePost = require('../middleware/postMiddleware');

router.get('/', validateToken, postController.getAllPosts);
router.post('/', validateToken, validatePost, postController.create);
router.get('/:id', validateToken, postController.getPostById);
router.put('/:id', validateToken, validateupdate, postController.updateById);

module.exports = router;