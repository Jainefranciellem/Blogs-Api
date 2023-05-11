const { User } = require('../models');

const creatUser = async () => {
  const newUser = await User.create({
    fullName: 'Jane Doe',
    email: 'jane.doe@gmail.com',
    });
  return newUser;
};

module.exports = {
  creatUser,
};