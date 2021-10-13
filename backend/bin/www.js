const app = require('../app')
const http = require('http')
const path = require('path')
const debug = require('debug')('bmtown:server')
const server = http.createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    },
})

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

server.listen(3002)

server.on('listening', onListening)

function onListening() {
    let addr = server.address()
    let bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port
    debug('Listening on ' + bind)
}
