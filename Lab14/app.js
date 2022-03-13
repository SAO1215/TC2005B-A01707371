const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const rutas_lab12 = require('./routes/lab12.routes');
const rutas_preguntas = require('./routes/preguntas.routes');

const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/lab13', rutas_lab12);
app.use('/preguntas', rutas_preguntas);

app.use((request, response, next) => {
    console.log('Middleware!');
    response.send('Aqui no hay nada!!!!! Intenta la ruta laboratorio: http://localhost:3000/lab13/ o http://localhost:3000/preguntas'); //Manda la respuesta
});


app.listen(3000);

