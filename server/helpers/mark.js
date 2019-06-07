/* eslint-disable linebreak-style */
import Joi from 'joi';

const validateMark = {
  validation(MarkAdSold) {
    const markAd = {
      status: Joi.string().required(),
    };
    return Joi.validate(MarkAdSold, markAd);
  },
};
export default validateMark;
