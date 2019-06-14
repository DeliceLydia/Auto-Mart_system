import Joi from 'joi';

const validateOrder = {
  validation(newOrder) {
    const userOrder = {
      car_id: Joi.number().required(),
      buyer: Joi.number().required(),
      amount: Joi.number().required(),

    };
    return Joi.validate(newOrder, userOrder);
  },
};
export default validateOrder;
