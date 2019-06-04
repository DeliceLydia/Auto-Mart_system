import express  from 'express';
import signup from '../controllers/signup';

const router = express.Router();

// signup
router.post('/api/v1/auth/signup', signup);

export default router;