import Joi from 'joi';

const validateOrder = {
  validation(newOrder) {
    const userOrder = {
      new_price_offered: Joi.number().required(),
    };
    return Joi.validate(newOrder, userOrder);
  },
};
export default validateOrder;
