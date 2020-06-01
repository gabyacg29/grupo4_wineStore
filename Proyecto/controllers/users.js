// var modelUsers = require('../data/users.js');
// habilitar una vez Santiago haya armado los manipuladores de json

// para borrar luego
function prueba (req, res){
    res.send('corriendo');
};
var modelUsers = {
    Consulta: () => {return 0},
    Alta: (datos) => {return 0},
    Baja: (ID) => {return 0},
    Modificacion: (ID, datos) => {return 0},
    ConsultaDetalle: (iden) => {return 0},
};
// fin borrado.

let formularioIngreso = (req, res) => {
    res.send('Formulario de ingreso');
};
let validacionUsuario = (req, res) => {
    let {mail,contrasenia} = req.body;
    let usuario = Consulta(mail,contrasenia);
    if(usuario.id > 0){
        res.send('Logued');
    } else{
        res.redirect('/users/login');
    }
};
let formularioRegistro = (req, res) => {
    res.send('Formulario de registro');
};
let registrandoUsuario = (req, res) => {
    let {nombre,apellido,email,contrasenia,categoria,imagen} = req.body;
    modelUsers.Alta(nombre,apellido,email,contrasenia,categoria,imagen);
    res.redirect('/users/login');
};
let formularioEdicion = (req, res) => {
    res.send('Formulario de edicion');
};
let detalleUsuario = (req, res) => {
    let {id} = req.session.user;
    let usuario = ConsultaDetalle(id);
    res.send('Detalle de Usuario');
};


module.exports = {
    FormIngreso: formularioIngreso,
    Ingreso: validacionUsuario,
    FormRegistro: formularioRegistro,
    Registrando: registrandoUsuario,
    FormEdicion: prueba,
    Editando: prueba,
    Detalle: prueba,
};