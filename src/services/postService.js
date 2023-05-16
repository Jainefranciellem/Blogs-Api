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

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories' }] });
  return post;
};

const updatePostById = async (id, data) => {
  const update = await BlogPost.update(data, { where: { id } });
  return update;
};

const deletePostById = async (id) => {
  const deletePost = await BlogPost.destroy({ where: { id } });
  return deletePost;
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePostById,
  deletePostById,
};