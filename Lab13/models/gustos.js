
/*const hobbies = [
    {nombre: "Leer"},
    {nombre:  "Ver pelis"}, 
    {nombre: "Jugar"}
];*/

const comida = [
    {nombre: "Anvorgesas"},
    {nombre:  "Helado"}, 
    {nombre: "Jugo"}
];
/*
const bandas = [
    {nombre: "The Smiths"},
    {nombre:  "The Cure"}, 
    {nombre: "Sigur Ros"}
];

module.exports = class Hobbie {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    saveh() {
        hobbies.push(this);
        console.log(hobbies);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllh() {
        return hobbies;
    }
}

module.exports = class Banda {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        bandas.push(this);
        console.log(bandas);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return bandas;
    }
}*/

module.exports = class Comidas {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        comida.push(this);
        console.log(comida);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return comida;
    }
}

