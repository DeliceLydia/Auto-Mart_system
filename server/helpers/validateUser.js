import Joi from 'joi';

const checkSignup = (newUser)=> {

    const schema = {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.required(),
      address: Joi.string(),
      is_admin: Joi.boolean(),
    };
    return Joi.validate(newUser, schema);
};

const checkSignin = (returningUser)=> { 

    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    };
    return Joi.validate(returningUser, schema);
  }

export {
  checkSignup,
  checkSignin,
} 
