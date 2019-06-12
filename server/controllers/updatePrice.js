/* eslint-disable linebreak-style */
import moment from 'moment';
import validatePrice from '../helpers/updatePrice';
import cars from '../models/cars';

const updatePrice = (req, res) => {
  try {
    const { error } = validatePrice.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,

    });
    return;
  }

  const carId = req.params.id;
  const carIndex = cars.findIndex(o => o.id === parseInt(carId, 10));
  if (carIndex > -1) {
    const originalCar = ads[carIndex];
    const newCar = {
      id: originalCar.id,
      owner: originalCar.owner,
      createdOn: moment().format('LL'),
      state: originalCar.state,
      status: originalCar.status,
      price: req.body.price,
      manufacturer: originalCar.manufacturer,
      model: originalCar.model,
      body_type: originalCar.body_type,
    };
    ads[carIndex] = {
      id: originalCar.id,
      owner: originalCar.owner,
      createdOn: newCar.createdOn,
      state: originalCar.state,
      status: originalCar.status,
      price: newCar.price,
      manufacturer: originalCar.manufacturer,
      model: originalCar.model,
      body_type: originalCar.body_type,
    };

    res.status(200).json({
      status: 200,
      data: newCar,
    });
    return;
  }
  res.status(404).json({
    status: 404,
    error: 'car post not found',
  });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'server'
    });
  }
};
export default updatePrice;
