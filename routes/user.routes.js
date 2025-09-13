const router = require('express').Router()
const usersControllers = require('../controllers/user.controllers')

router.get('/', usersControllers.getUsers)

module.exports = router
