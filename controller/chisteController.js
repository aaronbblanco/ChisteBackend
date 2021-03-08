'use strict'
let Chiste = require('../models/chisteSchema')

/**
 *  Deberá permitir listar todos los chistes por pantalla
- Deberá permitir insertar un nuevo chiste mediante un formulario
- Deberá permitir borrar un chiste determinado
 */

async function getChistes(req , res) {
    try{
        const chiste = await Chiste.find({}).exec()
        res.status(200).json(chiste)
    }catch(error){
        res.status(500).json('error : '+error)
    }
} 

async function saveChiste(req , res){
    const chisteBody = req.body
    const chiste = new Chiste(chisteBody)
    try{
        const chisteGuardado = await chiste.save()
        res.status(200).json('Informacion Guardada correctamente')
    }catch(error){
        res.status(500).json('error : '+error)
    }
}

async function deleteChiste(req , res){
    const chisteId = req.params.id
    try{
        const chisteBorrado = await Chiste.findByIdAndRemove(chisteId)
        res.status(200).json('Informacion borrada correctamente')
    }catch(error){
        res.status(500).json('error:'+error)
    }
}

module.exports = {getChistes , saveChiste , deleteChiste}