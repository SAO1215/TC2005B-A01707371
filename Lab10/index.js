const filesystem = require('fs');
 
//filesystem.writeFileSync('hola.txt', 'Hola desde node');

/*
const arreglo = [5000, 60, 90, 100, 10, 10000, 20, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} */

const hobbies = [];
const comida = [];
const bandas = [];

const http = require('http');

const server = http.createServer( (request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head>');
        response.write('<body>');
-       response.write('<section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section>');
+       response.write('<section><div class="content has-text-centered"> <div class="columns is-flex is-centered"> <br><br></div>');
        response.write('<h1>S.A.O</h1> No me llamo SAO, pero da igual, no soy fan de mi nombre. <br>Actualmente tengo 19 años, soy estudiante de cuarto semestre ITC en el TEC, no tengo idea de en que me quiero especializar me interesan muchas cosas aunque no sea buena en ninguna.');
        response.write('<h2>Mis Gustos</h2>');
        response.write('<h5>Comida Favorita</h5>');
        response.write('<div class="list-item">');
        for (let i in comida) {
            response.write('<li>' + comida[i] + '</li>');
        }
        response.write('</div><br>');
        response.write('<div class="buttons is-centered"> <a href="/comida"> <button class="button is-danger is-light is-small">Agregar Comida</button></a></div><br>')
        response.write('<h5>Bandas Favoritas</h5>');
        response.write('<div class="list-item">');
        for (let i in bandas) {
            response.write('<li>' + bandas[i] + '</li>');
        }
        response.write('</div><br>');
        response.write('<div class="buttons is-centered"> <a href="/bandas"> <button class="button is-danger is-light is-small">Agregar Banda</button></a></div><br>')
        response.write('<h5>Hobbies</h5>');
        response.write('<div class="list-item">');
        for (let i in hobbies) {
            response.write('<li>' + hobbies[i] + '</li>');
        }
        response.write('</div><br>');
        response.write('<div class="buttons is-centered"> <a href="/hobbies"> <button class="button is-danger is-light is-small">Agregar Hobbie</button></a></div><br>')
        response.write('</div></section>');   
        response.write('<footer class="footer"> <div class="content has-text-centered"> <p> <h3>Mis Links</h3> <a href="https://github.com/SAO1215" target="">Github</a> <br><a href="hhttps://discord.gg/8jjJVyJj">Discord</a> <br><a href="https://open.spotify.com/user/livy1216?si=abf34a56a76c4a1a">Spotify</a> <br><a href="https://miro.medium.com/max/960/1*ETKCijb_tVPU98ZZHTa2aA.gif">OF</a> <h3>Preguntas Frecuentes</h3> <strong>No</strong>, no es por Sword Art Online. Gracias. </p></div></footer>');
        response.write('</body></html>');
        response.end();


    } else if (request.url === '/comida' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head>');
        response.write('<body>');
        response.write('<section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section>');
        response.write('<section><div class="content has-text-centered"><br>');
        response.write('<h2>Aquí se habla de nuestra comida favorita</h2><br><br>');
        response.write('<form action="/comida" method="POST">');
        response.write('<label for="nombre">Agrega la comida que mas te gusta: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</section></div>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/comida' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            comida.push(nuevo_dato);
            console.log(comida);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head>');
            response.write('<body>');
            response.write('<section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section>');
            response.write('<section><div class="content has-text-centered"><br>');
            response.write('<h2>Aquí se habla de nuestra comida favorita</h2><br><br>');
            response.write('<h3>' + nuevo_dato + ' fue agregado a la lista.</h3>');
            response.write('<p>Estas son mis platillos preferidos:</p>');
            response.write('<div class="list-item">');
            for (let i in comida) {
                response.write('<li>' + comida[i] + '</li>');
            }
            response.write('</div>');
            response.write('<a href="comida">Agregar una nueva comida</a>');
            response.write('</section></div>');
            response.write('</body>');
            return response.end();
        });


    }else if (request.url === '/bandas' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head>');
        response.write('<body>');
        response.write('<section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section>');
        response.write('<section><div class="content has-text-centered"><br>');
        response.write('<h2>Aquí se habla de nuestras bandas favoritas</h2><br><br>');
        response.write('<form action="/bandas" method="POST">');
        response.write('<label for="nombre">Agrega la banda o artista que mas te gusta: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</section></div>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/bandas' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            bandas.push(nuevo_dato);
            console.log(bandas);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head>');
            response.write('<body>');
            response.write('<section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section>');
            response.write('<section><div class="content has-text-centered"><br>');
            response.write('<h2>Aquí se habla de nuestras bandas favoritas</h2><br><br>');
            response.write('<h3>' + nuevo_dato + ' fue agregado a la lista.</h3>');
            response.write('<p>Estas son los artistas que mas escucho:</p>');
            response.write('<div class="list-item">');
            for (let i in bandas) {
                response.write('<li>' + bandas[i] + '</li>');
            }
            response.write('</div>');
            response.write('<a href="bandas">Agregar otra banda</a>');
            response.write('</section></div>');
            response.write('</body>');
            return response.end();
        });

    
    }else if (request.url === '/hobbies' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head>');
        response.write('<body>');
        response.write('<section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section>');
        response.write('<section><div class="content has-text-centered"><br>');
        response.write('<h2>Aquí se habla de nuestros hobbies</h2><br><br>');
        response.write('<form action="/hobbies" method="POST">');
        response.write('<label for="nombre">Agrega uno de tus hobbies: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</section></div>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/hobbies' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            hobbies.push(nuevo_dato);
            console.log(hobbies);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 10</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></head>');
            response.write('<body>');
            response.write('<section class="section has-background-danger-light"><div class="container"><h1 class="title has-text-danger">Lab 10: Rutas y formas</h1><p class="subtitle has-text-danger">Olivia Araceli Morales Quezada<br>A01707371<br>oliviaraceli1215@gmail.com</p></div></section>');
            response.write('<section><div class="content has-text-centered"><br>');
            response.write('<h2>Aquí se habla de nuestros hobbies</h2><br><br>');
            response.write('<h3>' + nuevo_dato + ' fue agregado a la lista.</h3>');
            response.write('<p>Estos son mis hobbies:</p>');
            response.write('<div class="list-item">');
            for (let i in hobbies) {
                response.write('<li>' + hobbies[i] + '</li>');
            }
            response.write('</div>');
            response.write('<a href="hobbies">Agregar otro hobbie</a>');
            response.write('</section></div>');
            response.write('</body>');
            return response.end();
        });

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos | Page not found</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>La página '+ request.url +' no se encontró</h1>');
        response.write('</body>');
        response.end();
    }

});

server.listen(3000);