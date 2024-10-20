import express from 'express';
import { signin, signup,googleAuth } from '../controllers/user.controllers.js';

const router=express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',googleAuth);

export default router;