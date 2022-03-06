const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_lab11 = require('./routes/lab11.routes');
app.use('/lab11', rutas_lab11);


const rutas_preguntas = require('./routes/preguntas.routes');
app.use('/preguntas', rutas_preguntas);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});
/*
app.use('/ruta', (request, response, next) => {
    console.log('Respuesta de la ruta "/ruta"');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use('/hola', (request, response, next) => {
    console.log('Respuesta de la ruta "/hola"');
    response.send('¡Hola! Esta es la respuesta de la ruta "/hola"'); 
});*/

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});


app.listen(3000);

