const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_usuarios = require('./routes/auth.routes');
const rutas_lab18 = require('./routes/lab18.routes');
const rutas_preguntas = require('./routes/preguntas.routes');

const app = express();
const path = require('path');
const csrf = require('csurf');
const csrfProtection = csrf();
const multer = require('multer');


app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(session({
    secret: 'ñlknaeañco3pom4ñi3jrcñlawjomxñi3iq3mc4rsejf0438cnf83h4cknh43ui', 
    esave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getTime() + '-' + file.originalname);
    },
});

//Idealmente registramos multer después de bodyParser (la siguiente línea ya debería existir)
app.use(bodyParser.urlencoded({ extended: false }));

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use('/lab18', rutas_lab18);
app.use('/preguntas', rutas_preguntas);
app.use('/users', rutas_usuarios);

app.use((request, response, next) => {
    console.log('Middleware!');
    response.send('Aqui no hay nada!!!!! Intenta la ruta laboratorio: http://localhost:3000/users/signup o http://localhost:3000/preguntas'); //Manda la respuesta
});


app.listen(3000);

