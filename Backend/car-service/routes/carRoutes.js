import express from 'express';

const carRoutes=express.Router();

import { getCars,createCar } from '../controller/carController.js';

carRoutes.get('/car',getCars)

carRoutes.post('/car/create',createCar)

export default carRoutes;