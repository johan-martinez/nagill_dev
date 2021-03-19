const Sequelize = require("sequelize")
const config = require('../config/config.json')

//CONEXION BASE DE DATOS
const sequelize =  new Sequelize (config.database,config.user,config.password,
    {
        host : config.host,
        port:config.port,
        dialect:"mysql"
    }
)

module.exports=sequelize