const { createPost, getAll } = require('../services/postService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.payload.data;
    const post = await createPost(title, content, categoryIds, id);

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'internal error', error: error.message });
  }
};

const getAllPosts = async (_req, res) => {
 try {
  const posts = await getAll();
  console.log('post', posts);
  return res.status(200).json(posts);
 } catch (error) {
  return res.status(500).json({ message: 'internal error', error: error.message });
 }
};

module.exports = {
  create,
  getAllPosts,
};