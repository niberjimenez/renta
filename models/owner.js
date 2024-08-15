const {Schema,model} = require('mongoose')

const ownerSchema = Schema({
    name:{
        type: String,
        unique: true,
        required: [true,'the field plate is required'],
        maxlengt: [6,'max 10 character'],
        minlengt: [1,'minn 1 character']
    },
    cedula:{
        type: Number,
        required: [true,'the field cedula is required'],
        maxlengt: [12,'max 12 character']
    }
})


module.exports = model ('Owner',ownerSchema,'owner')