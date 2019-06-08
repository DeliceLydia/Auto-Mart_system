/* eslint-disable linebreak-style */
import Joi from 'joi';

const validateUnsold = {

  validation(status) {
    const unsoldCar = {
      status: Joi.string().valid('available').required(),
    };
    return Joi.validate(status, unsoldCar);
  },

};

export default validateUnsold;
