const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class DetallesPedido extends Model{}
DetallesPedido.init({
    unidades:{
        type:DataTypes.INTEGER,
        allowNull: false
    }},
    {
        sequelize,
        modelName:"DetallesPedido",
        timestamps:false
    }
);

module.exports=DetallesPedido;