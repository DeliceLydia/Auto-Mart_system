import Joi from 'joi';

exports.carsvalidator = (cars)=> {
  const schema = {
    email: Joi.string().email().trim().required(),
    manufacturer: Joi.string().trim().required(),
    model: Joi.string().trim().required(),
    price: Joi.number().required(),
    state: Joi.string().trim().required(),
    status: Joi.string().trim().required(),
  };

    
return Joi.validate(cars,schema);
};
  
