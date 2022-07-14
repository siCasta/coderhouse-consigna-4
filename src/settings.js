import express from 'express'
import path from 'path'
import routes from './routes/index.js'
import { errorHandler, notFound } from './errors/index.js'
import { __dirname } from './utils/utils.js'

const app = express()

// settings
app.set('port', process.env.PORT || 8080)

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// static files
app.use(express.static('public'))

// routes
routes(app)

// error handler
app.use(notFound)
app.use(errorHandler)

export default app