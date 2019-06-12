/* eslint-disable linebreak-style */
import moment from 'moment';
import cars from '../models/cars';
import ads from '../models/Ads';
import users from '../models/users';
import validateMark from '../helpers/mark';

const Order = (req, res) => {
  try {
  const { error } = validateMark.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,

    });
    return;
  }

  const userId = parseInt(users.id, 10);
  const user = users.findIndex(i => i.id === userId);

  const carId = parseInt(req.params.id, 10);
  const findCarId = ads.findIndex(c => c.id === carId);
  const originalCar = ads[findCarId];
  if (findCarId > -1) {
    if (originalCar.status !== 'available') {
      res.status(400).json({
        status: 400,
        error: 'sorry, you can not change the status of this order',
      });
      return;
    }

    const newCar = {
      id: originalCar.id,
      owner: originalCar.owner,
      created_on: originalCar.created_on,
      state: originalCar.state,
      status: req.body.status,
      price: originalCar.price,
      manufacturer: originalCar.manufacturer,
      model: originalCar.model,
      body_type: originalCar.body_type,
    };
    cars[newCar] = {
      id: originalCar.id,
      owner: originalCar.owner,
      created_on: originalCar.created_on,
      state: originalCar.state,
      status: newCar.status,
      price: originalCar.price,
      manufacturer: originalCar.manufacturer,
      model: originalCar.model,
      body_type: originalCar.body_type,
    };

    res.status(201).json({
      status: 201,
      data: {
        id: originalCar.id,
        email: user.email,
        created_on: moment().format('LL'),
        manufacturer: originalCar.manufacturer,
        model: originalCar.model,
        price: originalCar.price,
        state: originalCar.state,
        status: newCar.status,
      },
    });
    return;
  }
  res.status(404).json({
    status: 404,
    error: 'sorry we can not found the car',
  });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'server'
  });
}
};

export default Order;
