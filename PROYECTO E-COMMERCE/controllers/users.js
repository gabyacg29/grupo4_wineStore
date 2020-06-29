var modelUsers = require("../data/users.js");

// funcion borrador hasta que se completa cada controlador.
function prueba(res, req) {
  res.send("corriendo");
}

module.exports = {
  // Este controlador carga el formulario para el logueo de un Usuario.
  FormIngreso: (req, res) => {
    let data = {
      Formulario: "UsuarioRegistrado",
    };
    res.render("usuarios", { data: data });
  },
  // Este controlador procesa la validacion del mail y contraseña.
  Ingreso: (req, res) => {
    let { email, contrasenia } = req.body; // se toman los datos del formulario
    let usuarioExistente = modelUsers.Consulta(email);
    if (
      usuarioExistente != null &&
      usuarioExistente.Contrasenia == contrasenia
    ) {
      let user = {
        id: usuarioExistente.id,
        Nombre: usuarioExistente.Nombre,
        Apellido: usuarioExistente.Apellido,
        Email: usuarioExistente.Email,
        Categoria: usuarioExistente.Categoria,
        Imagen: usuarioExistente.Imagen,
      };
      req.session.user = user;
      res.redirect("/");
    } else {
      res.redirect("/users/login");
    }
  },
  // Este controlador carga el formulario para el registro de un nuevo usuario.
  FormRegistro: (req, res) => {
    let data = {
      Formulario: "FormularioRegistro",
    };
    res.render("usuarios", { data: data });
  },
  // Este controlador procesa el registro del usuario nuevo.
  Registrando: (req, res) => {
    let {
      nombre,
      apellido,
      email,
      contrasenia,
      contrasenia2,
      categoria,
    } = req.body;
    let imagen = req.file.filename; // se toma el nombre del archivo
    if (contrasenia == contrasenia2) {
      modelUsers.Alta(nombre, apellido, email, contrasenia, categoria, imagen);
      res.redirect("/users/login");
    } else {
      res.redirect("/users/register");
    }
  },
  FormEdicion: prueba,
  Editando: prueba,
  // Este controlador carga el formulario con los datos del usuario.
  Detalle: (req, res) => {
    console.log(req.session.user);
    if (req.session.user) {
      let { Email } = req.session.user;
      let usuarioExiste = modelUsers.Consulta(Email);
      if (usuarioExiste != null) {
        let data = {
          Formulario: "MisDatos",
          usuario: usuarioExiste,
        };
        res.render("usuarios", { data: data });
      } else {
        res.redirect("/users/login");
      }
    } else {
      res.redirect("/users/login");
    }
  },
};
