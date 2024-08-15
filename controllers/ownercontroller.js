const Owner = require('../models/vehicle')

const getOwner = async(req,res) =>{
    const  owner= await Owner.find()
    res.json(owner)
}


const postOwner = async(req,res) => {
    const body = req.body 
    let msg = 'owner inserted succesful '
    try {
        const owner = new Owner(body)
        await owner.save()

    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}
module.exports = { //exports function
    getOwner,
    postOwner
} 