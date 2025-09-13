const pool = require('../db')

class UserModels {
    async getUsers() {
        try {
            const users = await pool.query(`SELECT * FROM user`)
            if (users[0].length === 0) throw { status: 404, message: 'Пользователь не найден' }
            return users[0]
        } catch (e) {
            throw e
        }
    }
}

module.exports = new UserModels()
