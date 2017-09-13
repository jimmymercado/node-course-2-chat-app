var socket = io();

socket.on('connect', function() {
  console.log('connected to server');

  // socket.emit('createEmail', {
  //   to: 'jon@example.com',
  //   text: 'this is jim'
  // });

  socket.emit('createMessage', {
    from: "zel",
    text: "I'm ok"
  });

});

// socket.on('newEmail', function(email) {
//   console.log('New Email!', email);
// });

socket.on('newMessage', function(message) {
  console.log('New Message:', message);
})

socket.on('disconnect', function() {
  console.log('disconnected from the server');
});
