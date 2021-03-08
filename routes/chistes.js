'use strict'
var express = require('express')

var ChisteController = require('../controllers/chistes')
var api = express.Router()

api.get('/chistes/', ChisteController.getChistes) //listado
api.post('/chiste/', ChisteController.saveChiste) // insercion nueva
api.delete('/chiste/:id',ChisteController.deleteChiste)


module.exports = api

