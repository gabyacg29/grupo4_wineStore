const fs = require('fs');

// Lee el archivo Json
function readJSONfile() {
    return JSON.parse(fs.readFileSync(productoController.archivo, 'utf-8'));
}
// Guarda el json de productos
function saveJSONfile(productos) {
    fs.writeFileSync(productoController.archivo, JSON.stringify(productos, null, ' '));
}
// Agrega un nuevo producto a la lista de productos
function addProductToList(nombreProducto, descripcion, imagen, categoria, color, precio); {
    let nuevoProducto = {
        Nombre: nombreProducto,
        Descripcion: descripcion,
        Imagen: imagen,
        Categoria: categoria,
        Color: color,
        Precio: precio,
    };
    let productos = readJSONfile();
    productos.push(nuevoProducto);
    saveJSONfile(productos);
}
// Busca un producto por su id
function buscarPorId(idDeProducto) {
    let productos = readJSONfile();
    let producto = null;
    for (var i = 0; i < (productos.length); i++) {
        let cursor = productos[i];
        if (idDeProducto == cursor.Productos) {
            producto = cursor;
        }
    }
    return user; // si no lo encuentra devuelve null
}
//Modificar producto
function modificar(id, nombreProducto, descripcion, imagen, categoria, color, precio) {
    let productos = readJSONfile();
    for (var i = 0; i < (productos.length); i++) {
        let cursor = productos[i];
        if (id == cursor.id) {
            let producto = {
                Id: id,
                Nombre: nombreProducto,
                Descripcion: descripcion,
                Imagen: imagen,
                Categoria: categoria,
                Color: color,
                Precio: precio,
            }
            productos.splice(i, 1);
            productos.push(producto);
        }

    }
    saveJSONfile(productos);
}
// Eliminar producto
function eliminarProducto(idDeProducto) {
    let productos = readJSONfile();
    for (var i = 0; i < (productos.length); i++) {
        let cursor = productos[i];
        if (idDeProducto === cursor.idDeProducto) {
            productos.splice(i, 1);
        }
    }
}
// Exportar
module.exports = {
    Alta: addProductToList,
    Consulta: buscarPorId,
    Modificacion: modificar,
    Baja: eliminarProducto,
}