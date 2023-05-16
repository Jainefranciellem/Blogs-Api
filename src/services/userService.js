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

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const deleteUserById = async (id) => {
  const deleteUser = await User.destroy({ where: { id } });
  return deleteUser;
};

module.exports = {
  creatUser,
  getAll,
  getById,
  deleteUserById,
};