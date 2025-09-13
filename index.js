require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

// const errorHandler = require('./errorHandler')

const usersRoutes = require('./routes/user.routes')

const port = 3000

app.use('/api', usersRoutes)

function errorHandler(err, req, res, next) {
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Внутренняя ошибка сервера',
    })
}

app.use(errorHandler)

app.listen(port, () => {
    console.log('Server start')
})
