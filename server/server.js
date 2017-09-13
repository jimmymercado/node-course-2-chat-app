const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message.js');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

socket.emit('newMessage', generateMessage('Admin','Welcome to chap app'));


socket.broadcast.emit('newMessage', generateMessage('Admin','New user joined'));


socket.on('createMessage', (newMessage, callback) => {
  console.log('Create Message', newMessage);
  io.emit('newMessage', generateMessage(newMessage.from,newMessage.text));
  callback('This is from the server');

  // socket.broadcast.emit('newMessage', {
  //   from: newMessage.from,
  //   text: newMessage.text,
  //   createdAt: new Date().getTime()
  // });
});



  socket.on('disconnect', ()=>{
    console.log('user was disconnected');
  });
});



server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});


//module.exports = {app};
