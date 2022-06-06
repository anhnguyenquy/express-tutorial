require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { InvalidTokenModel } = require('./models')

const authRouter = require('./routes/auth')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const usersRouter = require('./routes/users')
const todoLocalJSONRouter = require('./routes/todoLocalJSON')
const todoMongoDBRouter = require('./routes/todoMongoDB')

const app = express()
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.MONGODB_DB_NAME
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/auth', authRouter)
app.use(async (req, res, next) => {
  try {
    const requestToken = req.headers.authorization.split(' ')[1]

    // Verifies if token has not expired
    jwt.verify(requestToken, process.env.JWT_PRIVATE_KEY)
    
    // Verfies if token is not invalid (token is invalidated when the user signs out)
    const existingInvalidToken = await InvalidTokenModel.findOne({ token: requestToken })
    if (existingInvalidToken) {
      throw '' // throws an error
    } 
    next() // Without this statement, the request will be blocked.
  }
  catch (err) {
    res.send('Token validation failed.')
  }
})

app.use('/test-auth', express.Router().get('/', (req, res, next) => {
  res.send('JWT Authentication Successful!')
}))

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/users', usersRouter)
app.use('/todoLocalJSON', todoLocalJSONRouter)
app.use('/todoMongoDB', todoMongoDBRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app