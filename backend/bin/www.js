const app = require('../app')
const http = require('http')
const path = require('path')
const debug = require('debug')('bmtown:server')
const server = http.createServer(app)
const fs = require('fs')
const socketIO = require('socket.io')
const cors = require('cors')
const io = socketIO(server, {
    // cors: {
    //origin: 'http://127.0.0.1:3000',
    //mehotds: ['GET', 'POST'],
    //allowHeaders: ['my-custom-header'],
    //},
})

server.listen(4000)

server.on('listening', onListening)

function onListening() {
    let addr = server.address()
    let bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port
    debug('Listening on ' + bind)
}
