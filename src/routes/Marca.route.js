const express =  require('express')


const marcaController =  require('../controller/Marca.controller')

const router =  express.Router();

router.get('/', marcaController.getAllMarcas)

router.post('/', marcaController.postMarca)
/*
router.delete('/id', marcaController.deleteMarca)

router.post('/id', marcaController.updateMarca)

router.get('/id', marcaController.getById)
*/

module.exports =  router