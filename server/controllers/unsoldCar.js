import cars from '../models/cars';
import validateUnsold from '../helpers/unsoldCars';

const getUnsoldCars = (req, res) => {
  try {
    const { error } = validateUnsold.validation(req.query);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }
  const unsoldCars = cars.filter(car => car.status === 'available');
  res.status(200).json({
    status: 200,
    data: unsoldCars,
  });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'server'
    });
  }
};
export default getUnsoldCars;
