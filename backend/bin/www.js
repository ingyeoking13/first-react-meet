const app = require('../app')
const http = require('http')
const path = require('path')
const debug = require('debug')('bmtown:server')
const server = http.createServer(app)
const fs = require('fs')
const socketIO = require('socket.io')
const io = socketIO(server, {})

let clients = []

io.on('connection', (socket) => {
    clients.push(socket)
    socket.join('myroom')
    io.to('myroom').emit(
        'userUpdate',
        clients.map((client) => client.conn.remoteAddress)
    )

    socket.on('message', (msg) => {
        io.to('myroom').emit('message', `[${socket.conn.remoteAddress}] ${msg}`)
    })

    socket.on('disconnect', () => {
        clients = clients.slice(clients.indexOf(socket), 1)
        socket.to('myroom').emit(
            'userUpdate',
            clients.map((client) => client.conn.remoteAddress)
        )
    })
})

server.listen(3000)

server.on('listening', onListening)

function onListening() {
    let addr = server.address()
    let bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port
    debug('Listening on ' + bind)
}
