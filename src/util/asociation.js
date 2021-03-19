
const Administrador=require('../models/Administrador.model');
const Departamento=require('../models/Departamento.model');
const Categoria=require('../models/Categoria.model');
const DetallesPedido=require('../models/DetallesPedido.model');
const Direccion=require('../models/Direccion.model');
const Inventario=require('../models/Inventario.model');
const Marca=require('../models/Marca.model');
const Municipio=require('../models/Municipio.model');
const Pedido=require('../models/Pedido.model');
const Persona=require('../models/Persona.model');
const Producto=require('../models/Producto.model');
const ProductoProveedor=require('../models/ProductoProveedor.model');
const Proveedor=require('../models/Proveedor.model');
const Tienda=require('../models/Tienda.model');

//relaciones uno a muchos
Departamento.hasMany(Municipio);
Pedido.hasMany(DetallesPedido);
Producto.hasMany(DetallesPedido);
Municipio.hasMany(Direccion);
Inventario.hasMany(Producto);
Tienda.hasMany(Inventario);
Proveedor.hasMany(Pedido);
Administrador.hasMany(Tienda);
Marca.hasMany(Producto);
Categoria.hasMany(Producto);
Proveedor.hasMany(ProductoProveedor);
Producto.hasMany(ProductoProveedor);

//relaciones uno a uno
Direccion.hasOne(Proveedor);
Direccion.hasOne(Tienda);
Persona.hasOne(Administrador);




//Añade clave derecha a la izquierda
Municipio.belongsTo(Departamento);
DetallesPedido.belongsTo(Pedido);
DetallesPedido.belongsTo(Producto);
Direccion.belongsTo(Municipio);
Producto.belongsTo(Inventario);
Inventario.belongsTo(Tienda);
Pedido.belongsTo(Proveedor);
Tienda.belongsTo(Administrador);
Producto.belongsTo(Marca);
Producto.belongsTo(Categoria);
ProductoProveedor.belongsTo(Proveedor);
ProductoProveedor.belongsTo(Producto);
Administrador.belongsTo(Persona);







