const {Schema,model} = require('mongoose')

const vehicleSchema = Schema({
    plate:{
        type: String,
        unique: true,
        required: [true,'the field plate is required'],
        maxlengt: [6,'max 6 character'],
        minlengt: [5,'min 5 character']
    },
    color:{
        type: String,
        required: [true,'the field color is required'],
        minlengt: [3,'min 3 character']
    },
    modelo:{
        type: Number,
        required: [true,'the field model is required'],
    }
})


module.exports = model ('Vehicle',vehicleSchema,'vehicle') //vehicle clase,schema //vehicle : nombre collectio
