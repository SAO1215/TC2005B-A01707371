const bandas = [
    {nombre: "The Smiths"},
    {nombre:  "The Cure"}, 
    {nombre: "Sigur Ros"}
];

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
}