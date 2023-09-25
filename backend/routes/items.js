const express = require('express')
const router = express.Router() 
const itemsController = require('../controllers/items')

router.get('/items', itemsController.getTodos)
router.get('/item/:id', itemsController.getTodo)
router.post('/item', itemsController.createTodo)
router.patch('/items/:id', itemsController.editTodo)
router.delete('/items/:id', itemsController.deleteTodo)
module.exports = router

