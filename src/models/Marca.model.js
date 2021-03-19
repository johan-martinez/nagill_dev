const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Marca extends Model{}
Marca.init({
    idMarca:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false
    }},
    {
        sequelize,
        modelName:"Marca",
        timestamps:false
    }
);

module.exports=Marca;