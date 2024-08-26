
import Vehicle from '../models/vehicle.js'

export async function getVehicle(req,res) {
    const  vehicle = await Vehicle.find
    res.json(vehicle)
}


export async function postVehicle(req,res) {
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

export async function putVehicle(req, res){
    const {plate, color, model} = req.body
    let msg= 'Vehicle updated sucesful'
    try{
        await vehicle.findOneAndUpdate({plate:plate}),({color:color,model})
    }catch (error){
        msg = error
    }
    res.json({msg:msg})
}

export async function deleteVehicle(req, res){
    const _id = req.params.id
    try {
        await vehicle.findByIdAndDelete({_id:_id})
        res.json('vehicle delete sucessfully')
    }catch(error){
        res.status(500).json(error, {msg: 'there was problem deliting the vehicle'})
    }
}

