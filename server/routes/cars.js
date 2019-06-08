/* eslint-disable linebreak-style */
import express from 'express';
import postAD from '../controllers/postAD';
import order from '../controllers/order';
import updateOrder from '../controllers/updateOrder';
import mark from '../controllers/mark';
import auth from '../middleware/auth';
import updatePrice from '../controllers/updatePrice';
import getCar from '../controllers/specificCar';
import getUnsoldCars from '../controllers/unsoldCar';

const router = express.Router();

// postAD
router.post('/api/v1/car', auth, postAD);

// PurchaseOrder
router.post('/api/v1/order', auth, order);

// UpdateOrderPrice
router.patch('/api/v1/order/:id/price', auth, updateOrder);

// MarkTheCarAsSold
router.patch('/api/v1/car/:id/status', auth, mark);

// UpdatePriceOfTheCar
router.patch('/api/v1/car/:id/price', auth, updatePrice);

// SpecificCar
router.get('/api/v1/car/:id', auth, getCar);

// UnsoldCars
router.get('/api/v1/car', auth, getUnsoldCars);


export default router;
