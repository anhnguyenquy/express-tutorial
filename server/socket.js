const socketIO = require('socket.io')

let socket

const initSocket = (server) => {
  let interval

  // CORS must be specifically enabled.
  const io = socketIO(server, {
    cors: {
      origin: "*"
    }
  })
  io.on('connection', appSocket => {
    // io is an HTTP server with websocket enabled
    // appSocket is a websocket connection
    socket = appSocket

    console.log('A user connected.')
    socket.on('disconnect', () => {
      console.log('A user disconnected.')
    })

    // The following is an example of the socket emitting event 'Time' every second since 
    // the first websocket connection is made
    if (!interval) {
      interval = setInterval(() => {
        socket.emit('Time', new Date().toISOString())
      }, 1000)
    }
  })
}

module.exports = {
  socket, // make socket available to other files
  initSocket // export to www to initialise socket
}

/* 
Basically, what happens here is that when www runs initSocket, it starts listening for websocket connections.
Once a connection is made, socket is initialised to the value of appSocket, making it available for other files to 
emit/receive events.
*/