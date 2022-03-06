const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_lab11 = require('./routes/lab11.routes');
app.use('/lab11', rutas_lab11);

const rutas_preguntas = require('./routes/preguntas.routes');
app.use('/preguntas', rutas_preguntas);

app.use((request, response, next) => {
    console.log('Middleware!');
    response.send('Ruta laboratorio: http://localhost:3000/lab11/ o http://localhost:3000/preguntas'); //Manda la respuesta
});


app.listen(3000);

