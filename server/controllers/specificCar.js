import cars from '../models/cars';

const getCar = (req, res) => {
 try {
  const car = cars.find(h => h.id === parseInt(req.params.id, 10));
  if (!car) {
    res.status(404).json({
      status: 404,
      error: 'car not found',
    });
  } else {
    res.status(200).json({
      status: 200,
      data: car,
    });
  }
 } catch (error) {
  res.status(500).json({
    status: 500,
    error: 'server'
  });
 }
};
export default getCar;
