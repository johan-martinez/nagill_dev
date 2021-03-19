const {Model,DataTypes}=require('sequelize')
const sequelize=require('../util/database')

class Municipio extends Model{}
Municipio.init({
        idMunicipio:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    nombre:DataTypes.STRING},
    {
        sequelize,
        modelName:"Municipio",
        timestamps:false
    }
);

module.exports=Municipio;