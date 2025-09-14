//Библиотека dotenv и express
require('dotenv').config()
const express = require('express')
const cors = require('cors')

//Создание экземпляра express
const app = express()

//Настройка(отключение) CORS
app.use(cors())
//Настройка сервера для работы с json
app.use(express.json())

//Подключение роутов
const usersRoutes = require('./routes/user.routes')

const errorHandler = require('./errorHandler')

const PORT = process.env.PORT || 4000

//Подключение роутов
app.use('/api', usersRoutes)

//Подключение обработчика ошибок
app.use(errorHandler)

//Запуск сервера
app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})
