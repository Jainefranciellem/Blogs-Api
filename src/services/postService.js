const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const post = await BlogPost.create({
    title,
    content,
    userId,
  });

  categoryIds.forEach(async (categoryId) => {
    await PostCategory.create({
      categoryId, postId: post.id,
    });
  });

  return post;
};

const getAll = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

module.exports = {
  createPost,
  getAll,
};