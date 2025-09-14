const usersModels = require('../models/users.models')

//Контроллеры
class UserController {
    async getUsers(req, res, next) {
        try {
            //Получение query параметров
            const { limit } = req.query

            const users = await usersModels.getUsers()

            res.json(users)
        } catch (e) {
            next(e)
        }
    }

    async createUser(req, res, next) {
        try {
            //Получение тела запроса
            const { name, password } = req.body
            const user = await usersModels.createUser(name, password)

            res.json(user)
        } catch (e) {
            next(e)
        }
    }

    async changeUser(req, res, next) {
        try {
            //Получение параметров пути
            const { id } = req.params
            const { name, password } = req.body
            const user = await usersModels.changeUser(id, name, password)

            res.json(user)
        } catch (e) {
            next(e)
        }
    }

    async deleteUser(req, res, next) {
        try {
            const { id } = req.params
            const user = await usersModels.deleteUser(id)

            res.json(user)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()
