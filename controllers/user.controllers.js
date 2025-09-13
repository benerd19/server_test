const usersModels = require('../models/users.models')

class UserController {
    async getUsers(req, res, next) {
        try {
            const users = await usersModels.getUsers()

            res.json(users)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()
