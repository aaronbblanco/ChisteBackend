var express = require('express')
const ChisteController = require('../controller/chisteController')
var api = express.Router()

api.get('/chistes',ChisteController.getChistes)
api.post('/chiste' , ChisteController.saveChiste)
api.delete('/chiste/:id' , ChisteController.deleteChiste)
module.exports = api