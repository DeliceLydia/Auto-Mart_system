import cars from '../models/cars';


const getUnsoldCarsWithinPriceRange = (req, res) => {
  const unsoldCars = cars.filter(car => car.status === 'available');
  if (!unsoldCars) {
    res.status(404).json({
      status: 404,
      error: ' no unsold cars found',
    });
    return;
  }

  const priceRangeSchema = {
    min_price: req.query.min_price,
    max_price: req.query.max_price,
  };

  const carPriceRange = unsoldCars.filter(p => p.price >= priceRangeSchema.min_price && p.price <= priceRangeSchema.max_price);
  if (!carPriceRange) {
    res.status(404).json({
      status: 404,
      error: 'cars within that price range not found',
    });
    return;
  }
  res.status(200).json({
    status: 200,
    data: carPriceRange,
  });
};
export default getUnsoldCarsWithinPriceRange;