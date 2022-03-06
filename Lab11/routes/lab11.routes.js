const express = require('express');

const router = express.Router();

const hobbies = [];
const comida = [];
const bandas = [];

router.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head><body><section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 11: Express</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section><section><div class="content has-text-centered"> <div class="columns is-flex is-centered"> <br><br></div><h1>S.A.O</h1> No me llamo SAO, pero da igual, no soy fan de mi nombre. <br>Actualmente tengo 19 años, soy estudiante de cuarto semestre ITC en el TEC, no tengo idea de en que me quiero especializar me interesan muchas cosas aunque no sea buena en ninguna. <h2>Mis Gustos</h2> <h5>Comida Favorita</h5> <div class="list-item">';
    for (let i in comida) {
        respuesta += '<li>' + comida[i] + '</li>';
    }
    respuesta += '</div><br><div class="buttons is-centered"> <a href="/lab11/comida"> <button class="button is-danger is-light is-small">Agregar Comida</button></a></div><br>';
    respuesta += '<h5>Bandas Favoritas</h5> <div class="list-item">';
    for (let i in bandas) {
        respuesta += '<li>' + bandas[i] + '</li>';
    }
    respuesta += '</div><br><div class="buttons is-centered"> <a href="/lab11/bandas"> <button class="button is-danger is-light is-small">Agregar Banda</button></a></div><br>';
    respuesta += '<h5>Hobbies</h5> <div class="list-item">';
    for (let i in hobbies) {
        respuesta += '<li>' + hobbies[i] + '</li>';
    }
    respuesta += '</div><br><div class="buttons is-centered"> <a href="/lab11/hobbies"> <button class="button is-danger is-light is-small">Agregar Hobbie</button></a></div><br></div></section> <footer class="footer"> <div class="content has-text-centered"> <p> <h3>Mis Links</h3> <a href="https://github.com/SAO1215" target="">Github</a> <br><a href="hhttps://discord.gg/8jjJVyJj">Discord</a> <br><a href="https://open.spotify.com/user/livy1216?si=abf34a56a76c4a1a">Spotify</a> <br><a href="https://miro.medium.com/max/960/1*ETKCijb_tVPU98ZZHTa2aA.gif">OF</a> <h3>Preguntas Frecuentes</h3> <strong>No</strong>, no es por Sword Art Online. Gracias. </p></div></footer> </body></html>';
    response.send(respuesta);
});

router.get('/comida', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head> <body> <section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section> <section><div class="content has-text-centered"><br><h2>Aquí se habla de nuestra comida favorita</h2><br><br><form action="/lab11/comida" method="POST"> <label for="nombre">Agrega la comida que mas te gusta: </label> <input type="text" name="nombre" required> <input type="submit" value="Enviar"> </form> <br><br><a href="/lab11/">Regresar a la pagina principal</a> </section></div></br> </body>';
    response.send(respuesta);
});

router.post('/comida', (request, response, next) => {
    console.log(request.body);
    comida.push(request.body.nombre);
    console.log(comida);
    response.status = 303;
    response.redirect('/lab11/');
});

router.get('/bandas', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head> <body> <section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section> <section><div class="content has-text-centered"><br><h2>Aquí se habla de nuestras bandas favoritas</h2><br><br><form action="/lab11/bandas" method="POST"> <label for="nombre">Agrega la banda o artista que mas te gusta: </label> <input type="text" name="nombre" required> <input type="submit" value="Enviar"> </form> <br><br><a href="/lab11/">Regresar a la pagina principal</a> </section></div></br> </body>';
    response.send(respuesta);
});

router.post('/bandas', (request, response, next) => {
    console.log(request.body);
    bandas.push(request.body.nombre);
    console.log(bandas);
    response.status = 303;
    response.redirect('/lab11/');
});

router.get('/hobbies', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head> <body> <section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section> <section><div class="content has-text-centered"><br><h2>Aquí se habla de nuestros hobbies</h2><br><br><form action="/lab11/hobbies" method="POST"> <label for="nombre">Agrega uno de tus hobbies: </label> <input type="text" name="nombre" required> <input type="submit" value="Enviar"> </form> <br><br><a href="/lab11/">Regresar a la pagina principal</a> </section></div></br> </body>';
    response.send(respuesta);
});

router.post('/hobbies', (request, response, next) => {
    console.log(request.body);
    hobbies.push(request.body.nombre);
    console.log(hobbies);
    response.status = 303;
    response.redirect('/lab11/');
});




module.exports = router;