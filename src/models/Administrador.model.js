const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Administrador extends Model{}
Administrador.init({},
    {
        sequelize,
        modelName:"Administrador",
        timestamps:false
    }
);

module.exports=Administrador;