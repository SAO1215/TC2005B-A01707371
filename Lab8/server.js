const arreglo = [5000, 60, 90, 100, 10, 10000, 20, 0, 120, 2000, 340, 1000, 50];

function promedio(arr) {
    let suma = 0;
    for (let item of arr) {
        suma += item;
    }
    return (suma/arr.length);    
}
console.log("Una función que reciba un arreglo de números y devuelva su promedio." + promedio(arreglo));


const filesystem = require('fs');
function doc_TXT(contenido){
    filesystem.writeFileSync('doc.txt', contenido);
}
var contenido = 'Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.';
doc_TXT(contenido)


const http = require('http');
const server = http.createServer( (request, response) => {
    console.log(request);
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 8</title>');
    response.end();
});

server.listen(3000);
