const express = require('express');
const router = express.Router();

const{ update, updateById, create, deletById, getById, getAllTodos}=require('../Controller/todosController');



router.patch('/:id',update);

router.post('/',create);

router.get('/',getAllTodos);

router.get('/:id',getById);

router.delete('/:id',deletById);

router.put('/:id',updateById);

module.exports = router;