//Файл с роутами
const { Router } = require('express')

//Создание экземпляра роутера
const router = new Router()

//Импорт контроллеров
const usersControllers = require('../controllers/user.controllers')

//Роуты и подключение контроллеров
router.get('/', usersControllers.getUsers)
router.post('/', usersControllers.createUser)
router.put('/:id', usersControllers.changeUser)
router.delete('/:id', usersControllers.deleteUser)

module.exports = router
