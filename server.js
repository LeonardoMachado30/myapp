/* eslint-disable n/no-path-concat */
// const es6Renderer = require('express-es6-template-engine')
// const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const { createEngine } = require('express-react-views')

const app = express()
const port = 80

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// view engine setup
app.set('views', path.resolve('./components'))
app.set('view engine', 'js')
app.engine('js', createEngine())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/static', express.static(__dirname + '/public'))

app.use(require('./routes'))

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404))
// })

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}

//   // render the error page
//   res.status(err.status || 500)
//   res.render('error')
// })

app.listen(port, function () {
  console.log(`listening on localhost:${port}`)
})

module.exports = app
