/* eslint-disable linebreak-style */
import Joi from 'joi';

const signin = {
  validation(login) {
    const user = {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    };
    return Joi.validate(login, user);
  },
};
export default signin;
