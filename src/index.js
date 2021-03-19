const express =  require('express')
const app =  express(); // se utiliza para escribir codigo de servidor sencillo
const morgan = require('morgan')

const sequelize=require('./util/database')
require('./util/asociation') //Relaciones de las tablas

// setings
app.set('port', process.env.PORT || 3000) // Este sirve para validar que si el servidor nos da un puerto definido, tome el puerto que le da el sistema o servicio de la nuve, en caso contrario toma el puerto 3000  

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)

//Conectar con la BD
sequelize.sync({force:false}).then(()=> {
    console.log('Nos hemos conectado a la BD')
})


//Importe de rutas
const Marca=require("./routes/Marca.route");


//Definicion de rutas
app.use('/Marca', Marca);

})