const express = require('express')//Creación del servidor
const morgan = require('morgan')//Middlewares de express

const app = express();//Ejecuta el servidor

//Middlewares
app.use(morgan('dev'));//Ver por consola las peticiones
app.use(express.json());//Recibir peticiones en formato JSON para manipularlos u usarlos

//routes
app.use(require('./routes/tasks.routes'))//manda a llamar las rutas

module.exports = app;//Se exporta para que otro archivo sea encargado de cargar sl servidor