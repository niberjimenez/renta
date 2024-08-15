const mongoose = require('mongoose')
const dbconnection = async() => {
    try{
       await mongoose.connect(process.env.MONGO_CNN)
       console.log('connected to mongo db')


    }catch(error){//controlar errores
        console.log(error)
    }
}

module.exports = dbconnection 