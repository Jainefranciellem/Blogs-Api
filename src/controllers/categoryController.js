const { createCategory } = require('../services/categoryService');

const createdCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await createCategory(name);

    if (!newCategory || !newCategory.name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: 'internal error', error: error.message });
  }
};

module.exports = {
  createdCategory,
};