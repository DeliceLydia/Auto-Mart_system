import cars from '../models/cars';

const deletePostedCarAd = (req, res) => {
  try {
    const postedAds = cars.find(g => g.id === parseInt(req.params.id, 10));
  if (!postedAds) {
    res.status(404).json({
      status: 404,
      error: ' The car you are trying to delete can not be found in the system',
    });
  } else {
    res.status(200).json({
      status: 200,
      data: 'Car Ad successfully deleted',
    });
  }
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'server'
    });
}
};
export default deletePostedCarAd;
