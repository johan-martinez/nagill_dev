const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Persona extends Model{}
Persona.init({
    cedula:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type:DataTypes.STRING,
        allowNull: false
    },
    correo:{
        type:DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        modelName:"Persona",
        timestamps:false
    }
);

module.exports=Persona;