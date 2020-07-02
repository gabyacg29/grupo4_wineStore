module.exports = (sequelize, dataTypes) =>{
    const Usuario = squelize.define('Carrito',{


    idCarrito:{

            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER

        },
   idUsuario:{



        },

     idProducto:{




        },
     fecha:{



        },
      cantidad:{





        },


    });

    return Carrito;
}