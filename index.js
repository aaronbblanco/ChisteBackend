const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
var api = require('./routes/chisteRoutes')
app.use(express.urlencoded());
app.use(express.json)
app.use(morgan('dev'))
app.use( cors() )
app.use('/api', api)

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next(); 
})


app.get('/', (req, res)=>{
    res.status(200).send('Bienvenid@ a nuestro API RestFull (backend)')
})

mongoose.connect('mongodb://localhost:27018/chistes', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify:false})
    		.then(res => {
        	console.log('Base de datos conectada');
        	app.listen(4300, ()=>{
            	console.log("API REST funcionando en http://localhost:4300")
        	})
    	}).catch(err => console.err('Error al conectar a la base de datos'))
