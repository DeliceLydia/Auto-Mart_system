import Joi from 'joi';

const validatePost = {
  validation(postAD) {
    const AD = {
      email: Joi.string().email().required(),
      created_on: Joi.string().required(),
      manufacturer: Joi.string().required(),
      model: Joi.string().required(),
      price: Joi.number().required(),
      state: Joi.string().required(),
      status: Joi.string().required(),
    };
    return Joi.validate(postAD, AD);
  },
};
export default validatePost;
