// var modelProducts = require('../data/products.js');

function prueba (res, req){
    res.send('corriendo');
};

module.exports = {
    Todos: prueba,
    FormAlta: prueba,
    Detalle: prueba,
    Creando: prueba,
    FormEdicion: prueba,
    Editando: prueba,
    Eliminando: prueba,
};