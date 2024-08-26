import {schema,model, version} from  'mongoose'
//bycript
const userschema= new schema ({
    email:{
        type:String,
        unique: [true,'email already exist'],
        required: [true, 'email is required'],
        minlenght:[10,'email require min 10 chararcters']

    },
    password: {
        type:String,
        required: [true,'password is required'],
        minlenght:[5,'the minimun password lenght 5 ']
    }},

    {
        timestamp:true,
        versionkey:false
    }
)

export default model ('user',userschema)