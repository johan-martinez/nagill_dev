const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Proveedor extends Model{}
Proveedor.init({
  idProveedor:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
  nitCedula:DataTypes.INTEGER,
  nombreComercial:DataTypes.STRING,
  telefono:DataTypes.STRING,
  correo:DataTypes.STRING,
  celular:DataTypes.STRING
  },
    {
        sequelize,
        modelName:"Proveedor",
        timestamps:false
    }
);

module.exports=Proveedor;