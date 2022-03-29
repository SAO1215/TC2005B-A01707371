const db = require('../util/database');

module.exports = class Comidas {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nueva_descripcion, nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO comida (nombre, descripcion, imagen) VALUES (?, ?, ?)', 
            [this.nombre, this.descripcion, this.imagen]);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM comida');
    }
}

