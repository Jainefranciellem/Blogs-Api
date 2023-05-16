const { getById } = require('../services/postService');

const validateUser = async (req, res, next) => {
  const userValid = (userId, post) => userId !== post;
  const { id: userId } = req.payload.data;
  const { id } = req.params;
  const post = await getById(id);
  console.log('POST', post);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (userValid(userId, post.dataValues.userId)) {
    return res
      .status(401)
      .json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = validateUser;