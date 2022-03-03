const arreglo = [5000, 60, 90, 100, 10, 10000, 20, 0, 120, 2000, 340, 1000, 50];

function promedio(arr) {
    let suma = 0;
    for (let item of arr) {
        suma += item;
    }
    return (suma/arr.length);    
}
console.log("Una función que reciba un arreglo de números y devuelva su promedio: " + promedio(arreglo));

function serieA(a, d, n) {
    for(let i=1; i<=n; i++){
      a = a+i*d;
    }
    return a;
}
console.log("Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.");
console.log("El calculo de una serie aritmetica de tres numeros ya dados: " + serieA(1, 3, 25));

const filesystem = require('fs');
function doc_TXT(contenido){
    filesystem.writeFileSync('doc.txt', contenido);
}
var contenido = 'Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.';
doc_TXT(contenido)

const http = require('http');
const server = http.createServer( (request, response) => {
    response.writeHead(200, {"Content-type": "text/html"});
    const html = filesystem.readFileSync(__dirname + "/lab8.html");
    response.end(html);
});

server.listen(3000);