import cars from '../models/cars';

const getAll = (req, res) => {
  try {
    if (!cars) {
      res.status(404).json({
        status: 404,
        error: 'no car found',
      });
    } else {
      res.status(200).json({
        status: 200,
        data: cars
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'server'
  });
}
};

export default getAll;
