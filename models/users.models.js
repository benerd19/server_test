const pool = require('../db')
const bcrypt = require('bcrypt')
//Модели
class UserModels {
    //Получение пользователей
    async getUsers() {
        try {
            const users = await pool.query(`SELECT * FROM user`)
            if (users[0].length === 0) throw { status: 404, message: 'Пользователь не найден' }
            return users[0]
        } catch (e) {
            throw e
        }
    }

    //Создание пользователя
    async createUser(name, password) {
        try {
            //Применение библиотеки для хеширования пароля
            const hashPassword = await bcrypt.hash(password, 10)
            const user = await pool.query(`INSERT INTO user (name, password) VALUES (?, ?)`, [name, hashPassword])
            return user
        } catch (e) {
            throw e
        }
    }

    //Изменение пользователя
    async changeUser(id, name, password) {
        try {
            const hashPassword = await bcrypt.hash(password, 10)
            const user = await pool.query(`UPDATE user SET name = ?, password = ? WHERE id = ?`, [name, hashPassword, id])
            return user
        } catch (e) {
            throw e
        }
    }

    //Удаление пользователя
    async deleteUser(id) {
        try {
            const user = await pool.query(`DELETE FROM user WHERE id = ?`, [id])
            return user
        } catch (e) {
            throw e
        }
    }
}

module.exports = new UserModels()
