
const Vehicle = require('../models/vehicle')

const getVehicle = async(req,res) =>{
    const  vehicle = await Vehicle.find()
    res.json(vehicle)
}


const postVehicle = async(req,res) => {
    const body = req.body 
    let msg = 'vehicle inserted succesful '
    try {
        const vehicle = new Vehicle(body)
        await vehicle.save()

    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}
module.exports = { //exports function
    getVehicle,
    postVehicle
} 