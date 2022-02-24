//Problema 1
function prob1(){
    let num = prompt("Ingresa un número para conocer uno por uno hasta el número ingresado sus los cuadrados y cubos.");

    document.write("<table><thead><tr><th>Números (N)</th><th>N al Cuadrado</th><th>N al Cubo</th></tr></thead>");
    for (let i = 1; i <= num; i++){
        document.write("<tr><th>" + i + "</th><th>" + i*i + "</th><th>" + i*i*i + "</th></tr>")
    }
    document.write("</table>");
}

//Problema 2
function prob2(){
    let num1 = Math.floor(Math.random() * 100 + 1);
    let num2 = Math.floor(Math.random() * 100 + 1);
    let resultado = num1 + num2;

    let tiempoInicio = Date.now();
    let respuesta = prompt ("Resuelva la siguiente suma: " + num1 +" + " + num2);
    let tiempoFinal = Date.now();

    let tiempo = (tiempoFinal- tiempoInicio) / 1000;

    let res_prob = `Tu respuesta es ${respuesta == resultado ? 'correcta' : 'incorrecta'} y tardaste ${tiempo} segundos en responder.`;
    document.getElementById("res_prob2").innerHTML = res_prob;
}

//Problema 3
var x = [3,0,49,26,9,1,43,51,-14,0,-73,-9,87,8,-7,4,60,5,0,4,-68,-63,-71,0,-36,3,-22,0,5];
function prob3(arreglo){
    let negativos = 0;
    let ceros = 0; 
    let positivos = 0;

    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] < 0){
            negativos++;
        } 
        else if (arreglo[i] == 0){
            ceros++;
        }
        else {
            positivos++;
        }
    }
    let res_prob = `Arreglo: ${x}<br> Numeros negativos: ${negativos}<br> Cantidad de 0s: ${ceros}<br> Numeros positivos: ${positivos}<br>`;
    document.getElementById("res_prob3").innerHTML = res_prob;
}

//Problema 4
let y = [[66,65,36,89,80,43],[77,68,45,56,56,96],[79,27,75,56,8,13],[36,93,72,59,70,48],[92,18,90,38,80,15],[96,28,18,73,87,61]];
let matriz = "[66,65,36,89,80,43]<br>[77,68,45,56,56,96]<br>[79,27,75,56,8,13]<br>[36,93,72,59,70,48]<br>[92,18,90,38,80,15]<br>[96,28,18,73,87,61]<br>"
function prob4(matrix){
    let promedios = 0;
    let promedios_array = new Array; 
    for (let i = 0; i < matrix.length; i++) {
        let suma = 0;
        let contador = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            suma += matrix[i][j];
        }
        contador += suma;
        promedios = contador/matrix.length;
        promedios_array.push((" " + promedios.toFixed(2))); 
    }
    let res_prob = `La matriz original: <br> ${matriz} <br> Los promedios de cada renglon son: ${promedios_array}`;
    document.getElementById("res_prob4").innerHTML = res_prob;
}

//Problema 5
var z = 0;
function prob5(numI) {
    let z = prompt("Ingresa un número para conocer su inverso.");
    numI = z;
    let inverso = numI.split('').reverse().join('');

    let res_prob = `El inverso del numero que ingresaste es : ${inverso}`;
    document.getElementById("res_prob5").innerHTML = res_prob;
}

//Problema 6
var w = 0;
function prob6(deci) {
    let w = prompt("Ingresa un número base decimal para conocer valor en binario, hexadecimal y octal.");
    deci = parseInt(w);
    let hexa = deci.toString(16);
    let octa = deci.toString(8);
    let bina = deci.toString(2);
    let res_prob = `Decimal: ${deci}<br> Hexadecimal: ${hexa.toUpperCase()}<br> Octal: ${octa}<br> Binario: ${bina}<br>`;
    document.getElementById("res_prob6").innerHTML = res_prob;
}