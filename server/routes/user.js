import express from 'express';
import json from 'express';
import {signin, signup} from '../controllers/users';


const user_router = express.Router();
user_router.use(json());

// signup
user_router.post('/api/v1/auth/signup', signup);
// signin
user_router.post('/api/v1/auth/signin', signin);


export default user_router;
