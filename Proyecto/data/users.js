const fs = require('fs');

// Lee el archivo Json y devuelve objeto literal
function readJSONfile() {
     return JSON.parse(fs.readFileSync(users.JSON, 'utf-8'));
}
// Guarda el json de usuarios
function saveJSONfile(objetos) {
   fs.writeFileSync(users.file, JSON.stringify(objetos, null, ''));
}
//-----------------------------------------//
// Alta de usuario
function agregarUsuario(nombre,apellido,email,contrasenia,categoria,imagen) {
   let nuevoUsuario = {
      Nombre: nombre,
      Apellido: apellido,
      Email: email,
      Contrasenia: contrasenia,
      Categoria: categoria,
      Imagen: imagen,
   };
   let usuarios = readJSONfile();
   usuarios.push(nuevoUsuario);
   saveJSONfile(usuarios);
}

//Consulta de usuario
buscarPorEmail: function(email){
   let archivoJson = readJSONfile();
   let user = null;
   archivoJson.forEach((elem, i) => {
     if (elem["email"] == email) {
        user = elem;
     }
   });
   return user;
//Modificar usuario



// Baja de usuario
function eliminarUsuario(arr, email) {
    for(var i = 0; i < arr.length; i++) {
       if(arr[i].email === email) {
         arr.splice(i, 1)
         return;
       }
    }
  }
// Exportar
module.exports = {
   Alta: (function agregarUsuario)
   Baja: (function eliminarUsuario)
}
