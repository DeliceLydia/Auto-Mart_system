/* eslint-disable linebreak-style */
import ads from '../models/Ads';

const getAll = (req, res) => {
  if (!ads) {
    res.status(404).json({
      status: 404,
      error: 'no car found',
    });
  } else {
    res.status(200).json({
      status: 200,
      data: ads,
    });
  }
};

export default getAll;
