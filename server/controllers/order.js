/* eslint-disable linebreak-style */
import moment from 'moment';
import order from '../models/order';
import users from '../models/users';
import cars from '../models/cars';
import validateOrder from '../helpers/order';


const Order = (req, res) => {
  const { error } = validateOrder.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,

    });
    return;

  }

  const id = parseInt(order.length + 1, 10);
  const newOrder = {
    id,
    car_id: req.body.car_id,
    amount: req.body.amount,
    status: req.body.status || 'unsold',
    buyer: req.body.buyer,

  };
  const userId = users.find(c => c.id === parseInt(newOrder.buyer, 10));
  if (!userId) {
    return res.status(404).json({
      status: 404,
      error: 'buyer identification is not found',
    });
  }

  const carId = cars.find(e => e.id === parseInt(newOrder.car_id, 10));
  if (!carId) {
    return res.status(404).json({
      status: 404,
      error: 'car ordered not found',
    });
  }

  order.push(newOrder);
  return res.status(201).json({
    status: 201,
    data: {
      id,
      car_id: newOrder.car_id,
      created_on: moment().format('LL'),
      status: newOrder.status,
      price: carId.price,
      price_offered: newOrder.amount,
    },
  });
};

export default Order;
