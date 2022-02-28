const confi = document.getElementById("confirmar");
const tripulante_a = document.getElementById("tripulante_a");
const corona_a = document.getElementById("corona_a");
const auriculares_a = document.getElementById("auriculares_a");
const tripulante_q = document.getElementById("tripulante_q");
const corona_q = document.getElementById("corona_q");
const auriculares_q = document.getElementById("auriculares_q");
const apodo = document.getElementById("apodo");
const foto = document.getElementById("foto");

function validarContraseña() {
    let contraseña = document.getElementById("password");
    let c_contraseña = document.getElementById("C_password");

    if(contraseña.value != c_contraseña.value){
        document.getElementById("respuesta").innerHTML = "Contraseña no coincide.";

    }else{
        document.getElementById("respuesta").innerHTML = "Contraseña valida.";
    }
}

var total = 0;
var cant_t = 0;
var cant_c = 0;
var cant_a = 0;

function add_tripulante() {
    let tripulante_precio = parseInt(document.getElementById("tripulante_precio").innerHTML);
    total = total + tripulante_precio;
    document.getElementById("total").innerHTML = total;
    cant_t++;
    document.getElementById("cant_t").innerHTML = cant_t;
}

function add_corona() {
    let corona_precio = parseInt(document.getElementById("corona_precio").innerHTML);
    total = total + corona_precio;
    document.getElementById("total").innerHTML = total;
    cant_c++;
    document.getElementById("cant_c").innerHTML = cant_c;
}

function add_auriculares() {
    let auriculares_precio = parseInt(document.getElementById("auriculares_precio").innerHTML);
    total = total + auriculares_precio;
    document.getElementById("total").innerHTML = total;
    cant_a++;
    document.getElementById("cant_a").innerHTML = cant_a;
}

function rem_tripulante() {
    let tripulante_precio = parseInt(document.getElementById("tripulante_precio").innerHTML);
    total = total - tripulante_precio;
    document.getElementById("total").innerHTML = total;
    cant_t--;
    document.getElementById("cant_t").innerHTML = cant_t;
}

function rem_corona() {
    let corona_precio = parseInt(document.getElementById("corona_precio").innerHTML);
    total = total - corona_precio;
    document.getElementById("total").innerHTML = total;
    cant_c--;
    document.getElementById("cant_c").innerHTML = cant_c;
}

function rem_auriculares() {
    let auriculares_precio = parseInt(document.getElementById("auriculares_precio").innerHTML);
    total = total - auriculares_precio;
    document.getElementById("total").innerHTML = total;
    cant_a--;
    document.getElementById("cant_a").innerHTML = cant_a;
}

function mouseOver1() {
    apodo.style.fontFamily = "fantasy";
}

function mouseOver2() {
    alert("Hola!!!")
}

confi.onclick = validarContraseña;

tripulante_a.onclick = add_tripulante;
corona_a.onclick = add_corona;
auriculares_a.onclick = add_auriculares;
tripulante_q.onclick = rem_tripulante;
corona_q.onclick = rem_corona;
auriculares_q.onclick = rem_auriculares;

apodo.onmouseover = mouseOver1;
foto.onmouseover = mouseOver2;
