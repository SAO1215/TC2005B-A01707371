const express = require('express');

const router = express.Router();

const path = require('path');
router.get('/lab1', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab1.html'));
});

const hobbies = [
    {nombre: "Leer"},
    {nombre:  "Ver pelis"}, 
    {nombre: "Jugar"}
];

const comida = [
    {nombre: "Anvorgesas"},
    {nombre:  "Helado"}, 
    {nombre: "Tacos"}
];

const bandas = [
    {nombre: "The Smiths"},
    {nombre:  "The Cure"}, 
    {nombre: "Sigur Ros"}
];

const prueba = [
    {nombre: "The Smiths"},
    {nombre:  "The Cure"}, 
    {nombre: "Sigur Ros"}
];

router.get('/', (request, response, next) => {
    console.log(request.body);
    response.render('misgustos',{comida: comida, bandas: bandas, hobbies: hobbies});
});

router.get('/comida', (request, response, next) => {
    console.log(request.body);
    response.render('comida');
});

router.post('/comida', (request, response, next) => {
    console.log(request.body);
    comida.push({nombre: request.body.nombre});
    console.log(comida);
    response.status = 303;
    response.redirect('/lab12/');
});

router.get('/bandas', (request, response, next) => {
    console.log(request.body);
    response.render('bandas');
});

router.post('/bandas', (request, response, next) => {
    console.log(request.body);
    bandas.push({nombre: request.body.nombre});
    console.log(bandas);
    response.status = 303;
    response.redirect('/lab12/');
});

router.get('/hobbies', (request, response, next) => {
    console.log(request.body);
    response.render('hobbies');
});

router.post('/hobbies', (request, response, next) => {
    console.log(request.body);
    hobbies.push({nombre: request.body.nombre});
    console.log(hobbies);
    response.status = 303;
    response.redirect('/lab12/');
});




module.exports = router;