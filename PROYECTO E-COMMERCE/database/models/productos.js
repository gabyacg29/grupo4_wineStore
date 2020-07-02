module.exports = (sequelize, dataTypes) =>{
    const Usuario = squelize.define('Productos',{
        
        id:{

            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER

        },
        nombre:{




        },
        descripcion:{





        },

        categoria:{





        },

        color:{




        },
        precio:{





        }


    });

    return Producto;

}