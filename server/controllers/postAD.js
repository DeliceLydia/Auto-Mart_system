import validatePost from '../helpers/postAD';
import Ads from '../models/Ads';

const validator = require('../helpers/postAD');

const postedcar = []
const post = (req, res) => {
  const { error } = validator.carsvalidator(req.body);
  if (error) {
   return res.status(400).json({
      status: 400,
      error: error.details[0].message,

    });
  }
  const car = {
    id: Ads.length +1,
    email: req.body.email,
    created_on: new Date(),
    manufacturer: req.body.manufacture,
    model: req.body.model,
    price: req.body.price,
    state: req.body.state,
    status: req.body.status,

  };
  postedcar.push(car);
  res.status(201).json({
    status: 201,
    data: car,
  });

};
export default post;

