import express  from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';

const router = express.Router();

// signup
router.post('/api/v1/auth/signup', signup);
//signin
router.post('/api/v1/auth/signin',signin);

export default router;