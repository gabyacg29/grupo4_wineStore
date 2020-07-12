const db = require('../database/models/index.js')



let productosController = {

  list: function (req,res){
    db.sequelize.query('SELECT * FROM productos')

      .then(function(resultados){
 
            let products = resultados[0];
            res.render('productos',{products:products})
      });
      
    }
}

    module.exports = productosController;