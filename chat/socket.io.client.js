/* Client side of socket.io */

/* Make sure socket.io is in window */
if(!window.io){
  // TODO: add something here to call for socket.io script
}

let socket = io('http://localhost:8001')

socket.on('connect', () => {
  console.log('connected')
})
// 
// socket.on('message', (data) => {
//   console.log(data)
// })

// socket.on('')
