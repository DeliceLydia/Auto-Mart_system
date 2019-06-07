import express from'express';
import postAD from '../controllers/postAD';
import order from '../controllers/order';
import updateOrder from '../controllers/updateOrder';
import auth from '../middleware/auth';

const router = express.Router();

//postAD
router.post('/api/v1/car',auth, postAD);

//PurchaseOrder
router.post('/api/v1/order',auth, order );

//UpdateOrderPrice
router.patch('/api/v1/order/:id/price',auth, updateOrder);

export default router;