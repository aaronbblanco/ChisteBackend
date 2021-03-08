const mongoose = require('mongoose')
const Schema = mongoose.Schema

let chisteSchema = Schema (
    {
        _id: {type: Schema.ObjectId, auto: true},
        texto : String,
        puntuacion : Number,
        categoria : String
    }
);

module.exports = mongoose.model('Chiste' , chisteSchema)