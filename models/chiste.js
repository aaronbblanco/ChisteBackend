var mongoose = require('mongoose')
var Schema = mongoose.Schema


var ChisteSchema = Schema(
    {
        texto: String,
        puntuacion: Number,
        categoria:String,
    }
);

module.exports = mongoose.model('Chiste', ChisteSchema)
