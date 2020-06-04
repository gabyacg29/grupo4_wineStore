const fs = require('fs');

// Lee el archivo Json
function readJSONfile() {
     return JSON.parse(fs.readFileSync(productoController.archivo, 'utf-8'));
}
// Guarda el json de productos
function saveJSONfile(productos) {
   fs.writeFileSync(productoController.archivo, JSON.stringify(productos, null, ' '));
}
// Agrega un nuevo producto a la lista de productos
function addProductToList(producto) {
   let productos = readJSONfile();
   productos.push(producto);
   saveJSONfile(productos);
}
// Busca un producto por su id
   searchByCode: function(codigo){
    let archivoJson = readJSONfile();
    let producto = null;
    archivoJson.forEach((prod, i) => {
      if (prod["codigo"] == codigo) {
         producto = prod;
      }
    });
    return producto; // si no lo encuentra devuelve null
}
// Eliminar producto
delete_deleteProduct: function(req, res){
    let producto = productoController.searchByCode(req.params.codigo);
    let productos = readJSONfile();
    let nuevoArrayProductos = [];
    nuevoArrayProductos = productos.filter(prod => prod.codigo != producto.codigo);
    console.log(nuevoArrayProductos);

    saveJSONfile(nuevoArrayProductos);
    let mensaje = "¡Success!: el producto se eliminó de la lista.";
    return res.redirect("/productos");
 }