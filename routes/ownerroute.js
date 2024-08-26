import router from 'express'
const routesOwner = router()

import { getOwner, postOwner } from '../controllers/ownercontroller.js';

routesOwner.get('/',getOwner)
routesOwner.post('/',postOwner)


export default routesOwner