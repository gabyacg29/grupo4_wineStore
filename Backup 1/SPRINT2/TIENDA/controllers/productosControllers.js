var productos = {
    productosTodos: function(req, res) {
        res.render('productos');
    },
    descripcionProductos: function(req, res) {
        res.render('descripcionProductos');
    },
    cargarProducto: function(req, res) {
        res.render('cargaProductos');
    }
};
module.exports = productos;