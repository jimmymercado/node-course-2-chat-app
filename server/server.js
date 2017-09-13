const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newEmail', {
  //   from: 'jim@example.com',
  //   text: 'hey, what is going on?',
  //   createdAt: 1234
  // });
  //
  // socket.on('createEmail', (newEmail) => {
  //     console.log('createEmail', newEmail);
  // });

  socket.emit('newMessage', {
    from: "jim",
    text: "hi, are you ok?",
    createdAt: 1234
  });

  socket.on('createMessage', (newMessage) => {
    console.log('Create Message', newMessage);
  });



  socket.on('disconnect', ()=>{
    console.log('user was disconnected');
  });
});



server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});


//module.exports = {app};
