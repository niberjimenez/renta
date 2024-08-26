import router from 'express'
const routesVehicle = Router()

import { getVehicle, postVehicle } from '../controllers/vehiclecontroller.js';


routesVehicle.get('/',getVehicle)
routesVehicle.post('/',postVehicle)



export default routesVehicle
