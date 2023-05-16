const { createPost, getAll, getById,
  updatePostById, deletePostById, getSearch } = require('../services/postService');

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

  return res.status(200).json(posts);
 } catch (error) {
  return res.status(500).json({ message: 'internal error', error: error.message });
 }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await getById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    await updatePostById(id, { title, content });
    const post = await getById(id);
    return res.status(200).json(post);
  } catch (error) {
  return res.status(500).json({ message: 'internal error', error: error.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePostById(id);
    res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getBySearch = async (req, res) => {
  try {
    const { q } = req.query;
    const posts = await getSearch(q);
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAllPosts,
  getPostById,
  updateById,
  deleteById,
  getBySearch,
};