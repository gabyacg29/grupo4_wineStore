// var modelUsers = require('../data/users.js');

function prueba (res, req){
    res.send('corriendo');
};

module.exports = {
    Ingreso: prueba,
    FormRegistro: prueba,
    Registrando: prueba,
    FormEdicion: prueba,
    Editando: prueba,
    Detalle: prueba,
};