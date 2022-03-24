const path = require('path');

const Comidas = require('../models/gustos');
const Hobbie = require('../models/hobbies');
const Banda = require('../models/bandas');

const comida = [];
const bandas = [];
const hobbies = [];

exports.listar = (request, response, next) => {
    Comidas.fetchAll()
    .then(([comida, fieldData]) => {
        Banda.fetchAll()
        .then(([bandas,fieldData]) =>{
            Hobbie.fetchAll()
            .then(([hobbies,fieldData]) =>{
                response.render('misgustos', {
                    comida: comida,
                    bandas: bandas,
                    hobbies: hobbies,
                    usuario: request.session.usuario ? request.session.usuario : '',
                    ultima_comida: request.cookies.ultima_comida ? request.cookies.ultima_comida : '',
                    ultima_banda: request.cookies.ultima_banda ? request.cookies.ultima_banda : '',
                    ultimo_hobbie: request.cookies.ultimo_hobbie ? request.cookies.ultimo_hobbie : '',
                })
            }).catch(error => {
                console.log(error);
            });
        }).catch(error =>{
            console.log(error);
        });
       
    })
    .catch(err => console.log(err)); 
};

exports.get_comida = (request, response, next) => {
    Comidas.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('comida', {
                comida: rows,
                usuario: request.session.usuario ? request.session.usuario : '',
                //ultima_comida: request.cookies.ultima_comida ? request.cookies.ultima_comida : '',
                //info: info //El primer info es la variable del template, el segundo la constante creada arriba
            }); 
        })
        .catch(err => {
            console.log(err);
        });
};

exports.post_comida = (request, response, next) => {
    console.log(request.body);
    const comida = new Comidas(request.body.nombre);
    comida.save();
    response.setHeader('Set-Cookie', 'ultima_comida'+comida.nombre );
    response.redirect('/lab17/');
};

exports.get_bandas = (request, response, next) => {
    Banda.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('bandas', {
                bandas: rows,
                usuario: request.session.usuario ? request.session.usuario : '',
                //ultima_comida: request.cookies.ultima_comida ? request.cookies.ultima_comida : '',
                //info: info //El primer info es la variable del template, el segundo la constante creada arriba
            }); 
        })
        .catch(err => {
            console.log(err);
        });
};

exports.post_bandas = (request, response, next) => {
    console.log(request.body);
    const bandas = new Banda(request.body.nombre);
    bandas.save();
    response.setHeader('Set-Cookie', 'ultima_banda='+bandas.nombre );
    response.redirect('/lab17/');
};

exports.get_hobbies = (request, response, next) => {
    Hobbie.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('hobbies', {
                bandas: rows,
                usuario: request.session.usuario ? request.session.usuario : '',
                //ultima_comida: request.cookies.ultima_comida ? request.cookies.ultima_comida : '',
                //info: info //El primer info es la variable del template, el segundo la constante creada arriba
            }); 
        })
        .catch(err => {
            console.log(err);
        });
};

exports.post_hobbies = (request, response, next) => {
    console.log(request.body);
    const hobbies = new Hobbie(request.body.nombre);
    hobbies.save();
    response.setHeader('Set-Cookie', 'ultimo_hobbie='+hobbies.nombre );
    response.redirect('/lab17/');
};