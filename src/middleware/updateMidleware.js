const { getById } = require('../services/postService');

const userValid = (userId, post) => userId !== post;

  const validateupdate = async (req, res, next) => {
    const { id } = req.params;
    const { id: userId } = req.payload.data;
    const { content, title } = req.body;
    const post = await getById(id); 

    if (userValid(userId, post.dataValues.userId)) {
      return res
        .status(401)
        .json({ message: 'Unauthorized user' });
    }
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }
    next();
  };
  
module.exports = validateupdate;