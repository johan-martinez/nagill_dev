const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Departamento extends Model{}
Departamento.init({
  idDepartamento:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull: false
},
nombre:{
  type:DataTypes.STRING,
  allowNull: false
}},
    {
        sequelize,
        modelName:"Departamento",
        timestamps:false
    }
);

module.exports=Departamento;