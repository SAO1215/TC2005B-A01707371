
const hobbies = [
    {nombre: "Leer"},
    {nombre:  "Ver pelis"}, 
    {nombre: "Jugar"}
];

module.exports = class Hobbie {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        hobbies.push(this);
        console.log(hobbies);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return hobbies;
    }
}