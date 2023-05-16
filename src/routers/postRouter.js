const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');
const validateToken = require('../middleware/authMiddleware');
const validateupdate = require('../middleware/updateMidleware');
const validatePost = require('../middleware/postMiddleware');
const validateUser = require('../middleware/authUserMidleware');

router.get('/', validateToken, postController.getAllPosts);
router.post('/', validateToken, validatePost, postController.create);
router.get('/:id', validateToken, postController.getPostById);
router.put('/:id', validateToken, validateupdate, validateUser, postController.updateById);
router.delete('/:id', validateToken, validateUser, postController.deleteById);

module.exports = router;