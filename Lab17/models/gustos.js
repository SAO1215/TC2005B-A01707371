const comida = [
    {nombre: "Anvorgesas"},
    {nombre:  "Helado"}, 
    {nombre: "Jugo"}
];

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

