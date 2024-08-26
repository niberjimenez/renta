import bcrypt from 'bcryptjs'//para incriptar 

import User from '../models/user.js'


export async function  postUser(req,res){
    const body = req.body 
    try{
        const user = new User(body)
        user.password = bycrypt.hash(body.password,10)//increptar valores //10 salt 
        await user.save()
        res.status(201).json({msg:'user cereated succesfully'})
    }catch (error){
        res.status(409).json({msg:'there were problem creating the user'})
    }
} 
    
