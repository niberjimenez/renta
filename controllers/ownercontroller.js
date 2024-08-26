import Owner from '../models/owner.js'

export async function getOwner(req,res){
    const  owner= await Owner.find
    res.json(owner)
}


export async function postOwner(req,res){
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

