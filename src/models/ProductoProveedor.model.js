const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class ProductoProveedor extends Model{}
ProductoProveedor.init({
},
    {
        sequelize,
        modelName:"ProductoProveedor",
        timestamps:false
    }
);

module.exports=ProductoProveedor;