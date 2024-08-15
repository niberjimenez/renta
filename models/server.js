const express = require('express');
require('dotenv').config()
const dbconnection = require('../database/config')
const {getVehicle, postVehicle} = require('../controllers/vehiclecontroller')
const {getOwner,postOwner} = require('../controllers/ownercontroller')

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
        this.app.use(express.json())
        this.app.get(this.pathOwner,getOwner)
        this.app.post(this.pathOwner,postOwner)
        this.app.get(this.pathVehicle,getVehicle)
        this.app.post(this.pathVehicle,postVehicle)
    }


    listen(){
        this.app.listen(process.env.PORT,() =>{
            console.log(`server is running on port:${process.env.PORT}`)
        })
    }
}

module.exports = Server 