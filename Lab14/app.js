const express = require('express');
const bodyParser = require('body-parser');
const rutas_lab12 = require('./routes/lab12.routes');
const rutas_preguntas = require('./routes/preguntas.routes');

const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/lab12', rutas_lab12);
app.use('/preguntas', rutas_preguntas);

app.use((request, response, next) => {
    console.log('Middleware!');
    response.send('Ruta laboratorio: http://localhost:3000/lab12/ o http://localhost:3000/preguntas'); //Manda la respuesta
});


app.listen(3000);

