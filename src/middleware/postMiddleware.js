const { getAll } = require('../services/categoryService');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const categories = await getAll();
  const idList = categories.map(({ id }) => id);

  if (!categoryIds.every((category) => idList.includes(category))) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = validatePost;