const { User } = require('../models');

const creatUser = async (displayName, email, password, image) => {
  const newUser = await User.create({
    displayName,
    email,
    password,
    image,
    });
  return newUser;
};

const getAll = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });

  return user;
};

module.exports = {
  creatUser,
  getAll,
};