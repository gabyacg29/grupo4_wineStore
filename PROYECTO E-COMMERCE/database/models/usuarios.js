module.exports = (sequelize, DataTypes) =>{
    let alias= "Usuarios";
       
         let  ={
         id:{
 
             primaryKey:true,
             autoIncrement:true,
             allowNull:false,
             type:DataTypes.INTEGER
 
             },
           nombre:{
             Type:DataTypes.STRING(100)
          },

          apellido:{
            Type:DataTypes.STRING(100)
         },
             email:{

                Type:DataTypes.STRING(45)

             },
             contraseña:{
                Type:DataTypes.STRING(45)

             },
             categoria:{
                Type:DataTypes.STRING(45)
             },
             imagen:{
                Type:DataTypes.STRING(45)
             },

            };

            let config= {
                tableName: "products",
                timestamps: false
            }
        
            const Usuarios = sequelize.define(alias,cols,config);
        
            return Usuarios;
        
        }