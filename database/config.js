import { connect } from 'mongoose'

const dbconnection = async() => {
    try{
       await connect(process.env.MONGO_CNN)
       console.log('connected to mongo db')


    }catch(error){//controlar errores
        console.log(error)
    }
}

export default dbconnection 