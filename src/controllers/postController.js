const { createPost } = require('../services/postService');

const create = async (req, res) => {
  console.log('create post', req.payload);
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.payload.data;
    const post = await createPost(title, content, categoryIds, id);

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'internal error', error: error.message });
  }
};

module.exports = {
  create,
};