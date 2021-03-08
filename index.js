'use strict'
var app = require('./app')
var mongoose = require('mongoose')
var port = 4000


mongoose.connect(process.env.URL_DATABASE , (error, respuesta)=>{
    if(error){
        console.log("error en la conexion con la base de datos mongodb")
        throw error
    }else{
        console.log("Conexión establecida con mongodb correcta en puerto 27017")
        app.listen(port, ()=>{
            console.log("Servidor HTTP encendido correctamente en puerto "+ port)
        })
    }
})

