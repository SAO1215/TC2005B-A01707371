const express = require('express');

const router = express.Router();

const hobbies = [];
const comida = [];
const bandas = [];

router.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head>';
    respuesta += '<body><section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 11: Express</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section>';
    respuesta += '<section><div class="content has-text-centered"> <div class="columns is-flex is-centered"> <br><br></div><h1>S.A.O</h1> No me llamo SAO, pero da igual, no soy fan de mi nombre. <br>Actualmente tengo 19 años, soy estudiante de cuarto semestre ITC en el TEC, no tengo idea de en que me quiero especializar me interesan muchas cosas aunque no sea buena en ninguna.';
    respuesta += '<h2>Objetivos laboratorio</h2> <div class="list-item"> <li>Preparar el ambiente de trabajo con Node.js + NPM + Express</li> <li>Entender lo que son los frameworks de desarrollo web de back-end.</li> <li>Explorar Node.js + Express</li>';
    respuesta += '</div><br><div class="buttons is-centered"> <a href="/preguntas/respuesta"> <button class="button is-danger is-light is-small">Ver preguntas</button></a></div><br></div></section>';
    respuesta += '<footer class="footer"> <div class="content has-text-centered"> <p> <h3>Mis Links</h3> <a href="https://github.com/SAO1215" target="">Github</a> <br><a href="hhttps://discord.gg/8jjJVyJj">Discord</a> <br><a href="https://open.spotify.com/user/livy1216?si=abf34a56a76c4a1a">Spotify</a> <br><a href="https://miro.medium.com/max/960/1*ETKCijb_tVPU98ZZHTa2aA.gif">OF</a>';
    respuesta += '<h3>Preguntas Frecuentes</h3> <strong>No</strong>, no es por Sword Art Online. Gracias. </p></div></footer> </body></html>'
    response.send(respuesta);
});

router.get('/respuesta', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>Preguntas Lab5</title> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> </head>';
    respuesta += '<body> <section class="section has-background-danger-light"> <div class="container"> <h1 class="title has-text-danger"> Preguntas </h1> <p class="subtitle has-text-danger"> Olivia Araceli Morales Quezada<br>A01707371 </p></div>';
    respuesta += '</section> <section class="content has-text-centered"> <div> <h2>Express:</h2> <h4>Describe el archivo package.json.</h4> <div class="content has-text-centered"> <div class="columns is-flex is-centered"> <br>';
    respuesta += '<figure> <img src="https://miro.medium.com/max/1400/1*2GwEiVEtfMkScUC_Z1nG2Q.png"> </figure> <br></div></div></section>';
    respuesta += '<p class="has-text-centered">El archivo PACKAGE.JSON se dice que es un archivo de definición o manifiesto para nuestro proyecto, en el cual especificamos referencias al proyecto como: autor, repositorio, versión y sobre todo las dependencias. Este es generado automáticamente cuando se instalan paquetes o dependencias en el proyecto, su finalidad es mantener un historial de los paquetes instalados y optimizar la forma en que se generan las dependencias del proyecto y los contenidos de la carpeta node_modules/.</p></div></section>';
    respuesta += '<footer class="footer"> <div class="content has-text-centered"> <p> <h3>Framework</h3> <a href="">Bulma</a> </p></div></footer> </body></html>'
    response.send(respuesta);
});


module.exports = router;