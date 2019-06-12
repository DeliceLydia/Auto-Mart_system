import validatePost from '../helpers/postAD';
import ads from '../models/Ads';
import moment from 'moment';

const validator = require('../helpers/postAD');

const postedcar = []
const post = (req, res) => {
  try {
    const { error } = validator.carsvalidator(req.body);
  if (error) {
   return res.status(400).json({
      status: 400,
      error: error.details[0].message,

    });
  }
  const id = parseInt(ads.length + 1, 10);
  const car = {
    id,
    email: req.body.email,
    created_on: moment().format('LL'),
    manufacturer: req.body.manufacture,
    model: req.body.model,
    price: req.body.price,
    state: req.body.state,
    status: req.body.status,

  };
  ads.push(car);
  
  res.status(201).json({
    status: 201,
    data: car,
  });

  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'server'
    });
  }
};
export default post;

