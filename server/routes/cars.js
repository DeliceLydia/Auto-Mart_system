import express from'express';
import postAD from '../controllers/postAD';
import auth from '../middleware/auth';

const router = express.Router();
router.post('/api/v1/car',auth, postAD);

export default router;