import Router from 'express'
const routesUser = router()


import { postUser } from '../controllers/usercontroller.js'


routerUser.post('/',postUser)


export default routesUser
