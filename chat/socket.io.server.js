import socket from 'socket.io'

export default (server) => {

  const io = socket(server)

  let sockets = {}
  let sockets_count = 0
  io.on('connection', function(socket){
    // sockets = Object.assign(sockets, {['socket_'+(sockets_count++)] : socket.id })
    console.log(socket.id + ' connected')
    socket.on('message', (data) => {
      console.log(data)
      socket.broadcast.emit('message', data.message )
    })
  })
}
