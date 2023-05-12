const { creatUser, getAll, getById } = require('../services/userService');
const generateToken = require('../auth/token');

 const createdUser = async (req, res) => {
  try {
    console.log('email and password controller', req.body);
    const { displayName, email, password, image } = req.body;

    const newUser = await creatUser(displayName, email, password, image);
    const { passsword: _password, ...userWhithoutPassword } = newUser.dataValues;

    const token = generateToken(userWhithoutPassword);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'internal error', error: error.message });
  }
};

const getAllUser = async (_req, res) => {
  const user = await getAll();
  return res.status(200).json(user);
};

const getByIdUser = async (req, res) => {
  console.log('user service', req.params.id);
  try {
    const { id } = req.params;
    const user = await getById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  const { password: _password, ...userWithoutPassword } = user.dataValues;
  return res.status(200).json(userWithoutPassword);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  createdUser,
  getAllUser,
  getByIdUser,
};