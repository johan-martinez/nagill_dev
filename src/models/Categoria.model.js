const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Categoria extends Model{}
Categoria.init({
    idCategoria:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false
    },
    descripcion:DataTypes.STRING,
    imagen:DataTypes.STRING
},
    {
        sequelize,
        modelName:"Categoria",
        timestamps:false
    }
);

module.exports=Categoria;