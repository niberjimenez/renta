import express, { json } from 'express';
import 'dotenv/config'
import dbconnection from '../database/config.js';
import routesVehicle from '../routes/vehicleRoute.js';
import routesOwner from '../routes/ownerroute.js';
import routesUser from '../routes/userroute.js';

class Server{
    constructor (){
        this.app = express()
        this.listen()
        this.dbconnection() 
        this.pathVehicle = '/api/Vehicle'
        this.pathOwner = 'api/Owner'
        this.route()
    }
    async dbconnection(){
        await dbconnection()
    }

    route(){
        this.app.use(json())
        this.app.use('/api/vehicle',routesVehicle)
        this.app.use('/api/owner',routesOwner)
        this.app.use('/api/user',routesUser)
        
    }


    listen(){
        this.app.listen(process.env.PORT,() =>{
            console.log(`server is running on port:${process.env.PORT}`)
        })
    }
}

export default Server 