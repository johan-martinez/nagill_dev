const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Direccion extends Model{}
Direccion.init({
    idDireccion:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    detalles_direccion:DataTypes.STRING
},
    {
        sequelize,
        modelName:"Direccion",
        timestamps:false
    }
);

module.exports=Direccion;