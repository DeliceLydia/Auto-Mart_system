import Joi from 'joi';

const checkSignup = (newUser)=> {

    const schema = {
      first_name: Joi.string().trim().required(),
      last_name: Joi.string().trim().required(),
      email: Joi.string().email({ minDomainAtoms: 2 }).trim().required(),
      password: Joi.string().min(6).max(10).required(),
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
