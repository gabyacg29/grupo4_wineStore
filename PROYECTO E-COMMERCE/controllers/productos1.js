let db = require ("../database/models");



let productosController = {

  list: function (req,res){
    db.sequelize.query('SELECT * FROM productos')

      .then(function(resultados){
 
            let products = resultados[0];
            res.render('productos',{products:products})
      });
      
    }
  
    //.catch(error => console.log(error));
  
  
  

/* listSeleccion: function (req,res){
    db.Product.findAll()
    .then(products => {
        res.render("products", {products});
    })
    .catch(error => console.log(error));

  
  
  },
  
//para mandar una selección al home
  listCategoria: function (req,res){



},
// para mandar al detalle de producto con la subruta producto:id
   detalleProducto: function (req,res){



},



   add: function (req,res){



},
   


edit: function (req,res){



},

delete: function (req,res){



},

*/

}

module.exports = productosController;