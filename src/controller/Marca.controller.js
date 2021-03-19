const Marca = require('../models/Marca.model')


//Trae todas las marcas guardadas en la BD
exports.getAllMarcas= async(req,res)=>{
    Marca.findAll().then(
        marcas=>{
            res.json(marcas);
        }
    )
}

//Crea una nueva marca
exports.postMarca =  async (req, res) => {
      Marca.create({
          nombre:req.body.nombre
      }).then(marca=>{
          res.json(marca);
      })
    }
    