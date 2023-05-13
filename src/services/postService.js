const { BlogPost, PostCategory } = require('../models');

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

module.exports = {
  createPost,
};