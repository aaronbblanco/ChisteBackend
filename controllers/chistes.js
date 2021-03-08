'use strict'

var Chiste = require('../models/chiste')

function prueba(req, res){
    if(req.params.nombre){
        var n = req.params.nombre
    }else{
        var n ="SIN NOMBRE"
    }
    res.status(200).send("hola "+n)
}



function getChistes(req, res){
    var params =req.body
   
    // accedemos a la base de datos
    Chiste.find({}).sort('-_id').exec( (error, chistes)=>{
        console.log("datos:"+chistes);
        if(error){
            res.status(500).send( {accion: 'get all', mensaje: 'error al listar los chistes'}  )
        }else if( ! chistes){
            res.status(404).send( {accion: 'get all', mensaje: 'no se han encontrado chistes'}  )
        }else{
            res.status(200).send( {accion:"get all", data: chistes} )
        }
    })

}

function saveChiste(req, res){
    var params =req.body
    // Creamos un nuevo modelo de chiste
    var chiste = new Chiste();
    // rellenamos los datos
    chiste.texto = params.texto
    chiste.puntuacion = params.puntuacion
    chiste.categoria = params.categoria
    // Guardamos en la base de datos
    chiste.save( (error, chisteAlmacenado) =>{
        if(error){
            res.status(500).send({message: 'error al guardar el chiste'})
        }else{
            res.status(200).send({ accion:'save', chiste: chisteAlmacenado} )
        }
    })

}



function deleteChiste(req, res){
    var id = req.params.id
    Chiste.findByIdAndRemove(id,  (error, chisteDeleted) => {
        if(error){
            res.status(500).send({message: 'error al borrar el chiste'})
        }else{
            res.status(200).send({ accion:'delete', chiste: chisteDeleted} )
        }
    })
}

module.exports =  { prueba, getChistes, saveChiste, deleteChiste }


