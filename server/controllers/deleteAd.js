/* eslint-disable linebreak-style */
//  eslint-disable quotes
/* eslint-disable linebreak-style */
import ads from '../models/Ads';

const deletePostedCarAd = (req, res) => {
  const postedAds = ads.find(g => g.id === parseInt(req.params.id, 10));
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
};
export default deletePostedCarAd;
