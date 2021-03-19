const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Tienda extends Model{}
Tienda.init({
   idTienda:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull: false
  },
  nombre:{
     type:DataTypes.STRING,
     allowNull: false
  }
},
    {
        sequelize,
        modelName:"Tienda",
        timestamps:false
    }
);

module.exports=Tienda;