const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Pedido extends Model{}
Pedido.init({
    idPedido:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fecha_pedido:DataTypes.DATE
},
    {
        sequelize,
        modelName:"Pedido",
        timestamps:false
    }
);

module.exports=Pedido;