const express = require('express');

const router = express.Router();

const path = require('path');
router.get('/lab1', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab1.html'));
});

/*const hobbies = [
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
];*/

const gustosController = require('../controllers/misgustos_controller');

router.get('/', gustosController.listar);

/*router.get('/', (request, response, next) => {
    console.log(request.body);
    response.render('misgustos',{comida: comida, bandas: bandas, hobbies: hobbies});
});*/

/*router.get('/comida', (request, response, next) => {
    console.log(request.body);
    response.render('comida');
});*/
router.get('/comida', gustosController.get_comida);

/*router.post('/comida', (request, response, next) => {
    console.log(request.body);
    comida.push({nombre: request.body.nombre});
    console.log(comida);
    response.status = 303;
    response.redirect('/lab12/');
});*/

router.post('/comida', gustosController.post_comida);

/*router.get('/bandas', (request, response, next) => {
    console.log(request.body);
    response.render('bandas');
});*/
router.get('/bandas', gustosController.get_bandas);

/*router.post('/bandas', (request, response, next) => {
    console.log(request.body);
    bandas.push({nombre: request.body.nombre});
    console.log(bandas);
    response.status = 303;
    response.redirect('/lab12/');
});*/

router.post('/bandas', gustosController.post_bandas);

/*router.get('/hobbies', (request, response, next) => {
    console.log(request.body);
    response.render('hobbies');
});*/
router.get('/hobbies', gustosController.get_hobbies);

/*router.post('/hobbies', (request, response, next) => {
    console.log(request.body);
    hobbies.push({nombre: request.body.nombre});
    console.log(hobbies);
    response.status = 303;
    response.redirect('/lab12/');
});*/

router.post('hobbies', gustosController.post_hobbies);


module.exports = router;