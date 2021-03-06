const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const path = require('path');

const empresas = require('./routes/api/empresas');
const campanas = require('./routes/api/campanas');
const participantes = require('./routes/api/participantes');

const app = express();

//Bodyparser Midddleware
app.use(bodyParser.json());

//Configuracion de la base de datos
const db = require('./config/keys'). mongoURI; //URl de MONGOLAB

//Conexion a mongo
mongoose
	.connect(db)
	.then(() => console.log('Conectado a MongoDB...'))
	.catch(err => console.log(err));

//Use routes
app.use('/api/empresas', empresas);
app.use('/api/campanas', campanas);
app.use('/api/participantes', participantes);

//Static files
console.log()
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));