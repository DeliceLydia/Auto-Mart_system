/* eslint-disable linebreak-style */
import jwt from 'jsonwebtoken';
import validateUser from '../helpers/signup';
import users from '../models/users';


const signup = (req, res) => {
  const { error } = validateUser.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }

  const user = users.find(u => u.email === req.body.email);
  if (user) {
    res.status(400).json({
      status: 400,
      error: 'email taken',
    });
    return;
  }

  const newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    adress: req.body.adress,
    is_admin: req.body.is_admin,
  };
  const payload = {
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
    adress: newUser.adress,
    is_admin: newUser.is_admin,
  };
  const token = jwt.sign(payload, 'secret_key', { expiresIn: '24hrs' });
  users.push(newUser);
  res.status(201).json({
    token,
    status: 201,
    data: newUser,
  });

};
export default signup;
