const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const path = require('path')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware')

//app.use(
//createProxyMiddleware({
//target: 'ws://127.0.0.1:3000',
//ws: true,
//}),
//createProxyMiddleware({
//target: 'http://127.0.0.1:3000',
//ws: true,
//}),
//createProxyMiddleware({
//target: 'http://localhost:3000',
//ws: true,
//})
//)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

module.exports = app
