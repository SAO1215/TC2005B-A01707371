const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_usuarios = require('./routes/auth.routes');
const rutas_lab17 = require('./routes/lab17.routes');
const rutas_preguntas = require('./routes/preguntas.routes');

const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'ñlknaeañco3pom4ñi3jrcñlawjomxñi3iq3mc4rsejf0438cnf83h4cknh43ui', 
    esave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/lab17', rutas_lab17);
app.use('/preguntas', rutas_preguntas);
app.use('/users', rutas_usuarios);

app.use((request, response, next) => {
    console.log('Middleware!');
    response.send('Aqui no hay nada!!!!! Intenta la ruta laboratorio: http://localhost:3000/users/login o http://localhost:3000/preguntas'); //Manda la respuesta
});


app.listen(3000);

