import Joi from 'joi';

exports.carsvalidator = (cars)=> {
  const schema = {
    email: Joi.string().required(),
    manufacturer: Joi.string().required(),
    model: Joi.string().required(),
    price: Joi.number().required(),
    state: Joi.string().required(),
    status: Joi.string().required(),
  };

    
return Joi.validate(cars,schema);
};
  
