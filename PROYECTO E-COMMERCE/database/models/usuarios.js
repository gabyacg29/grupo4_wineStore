module.exports = (sequelize, dataTypes) =>{
const Usuario = squelize.define('Usuarios',{

id:{

autoIncrement:true,
primaryKey:true,
type:dataTypes.INTEGER

},
nombre:{



},
apellido:{




},
email:{



},
contrasenia:{



},
imagen:{




}


});

return Usuario;

}