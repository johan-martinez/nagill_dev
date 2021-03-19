const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Inventario extends Model{}
Inventario.init({
    stock:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    fecha_ingreso:{
        type:DataTypes.DATE,
        allowNull: false
    },
    Precio_venta:{
       type:DataTypes.DOUBLE,
       allowNull: false
    },
    iva:DataTypes.INTEGER
},
    {
        sequelize,
        modelName:"Inventario",
        timestamps:false
    }
);

module.exports=Inventario;