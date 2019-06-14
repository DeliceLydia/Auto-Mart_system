import Joi from 'joi';

const validatePrice = {
  validation(newPrice) {
    const updatePrice = {
      price: Joi.number().required(),
    };
    return Joi.validate(newPrice, updatePrice);
  },
};
export default validatePrice;
