const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Producto extends Model{}
Producto.init({
    idProducto:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
    },
    nombre:{
       type:DataTypes.STRING,
        allowNull: false
    },
    precio_costo:{
       type:DataTypes.DOUBLE,
       allowNull: false
    },
    descripcion:DataTypes.STRING,
    imagen:DataTypes.STRING
},
    {
        sequelize,
        modelName:"Producto",
        timestamps:false
    }
);

module.exports=Producto;