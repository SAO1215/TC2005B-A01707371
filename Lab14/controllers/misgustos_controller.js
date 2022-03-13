const path = require('path');

const Comidas = require('../models/gustos');
const Hobbie = require('../models/hobbies');
const Banda = require('../models/bandas');

exports.listar = (request, response, next) => {
    console.log(request.body);
    console.log(request.get('Cookie').split(':')[1]);
    console.log(request.cookies);
    //response.render('misgustos',{comida: comida, bandas: bandas, hobbies: hobbies});
    response.render('misgustos', {comida: Comidas.fetchAll(), bandas: Banda.fetchAll(), hobbies: Hobbie.fetchAll()});
    //response.render('misgustos', {comida: Comidas.fetchAll()});
};

exports.get_comida = (request, response, next) => {
    console.log(request.body);
    response.render('comida');
};

exports.post_comida = (request, response, next) => {
    console.log(request.body);
    const comida = new Comidas(request.body.nombre);
    comida.save();
    response.setHeader('Set-Cookie', 'ultima_comida'+comida.nombre );
    response.redirect('/lab13/');
};

exports.get_bandas = (request, response, next) => {
    console.log(request.body);
    response.render('bandas');
};

exports.post_bandas = (request, response, next) => {
    console.log(request.body);
    const bandas = new Banda(request.body.nombre);
    bandas.save();
    response.setHeader('Set-Cookie', 'ultima_banda='+bandas.nombre );
    response.redirect('/lab13/');
};

exports.get_hobbies = (request, response, next) => {
    console.log(request.body);
    response.render('hobbies');
};

exports.post_hobbies = (request, response, next) => {
    console.log(request.body);
    const hobbies = new Hobbie(request.body.nombre);
    hobbies.save();
    response.setHeader('Set-Cookie', 'ultimo_hobbie='+hobbies.nombre );
    response.redirect('/lab13/');
};