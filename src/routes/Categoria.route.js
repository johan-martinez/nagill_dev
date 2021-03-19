const express =  require('express')

const categoriaController =  require('../controller/Categoria.controller');

const router =  express.Router();
/*
router.get('/',categoriaController.getAllCategoria)

router.post('/',categoriaController.postCategoria)

router.delete('/id',categoriaController.deleteCategoria)

router.post('/id',categoriaController.updateCategoria)

router.get('/id',categoriaController.getByIdCategoria)
*/

module.exports =  router