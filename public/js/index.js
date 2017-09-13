var socket = io();

socket.on('connect', function() {
  console.log('connected to server');


});

socket.on('newMessage', function(message) {
  console.log('New Message:', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
})

socket.on('disconnect', function() {
  console.log('disconnected from the server');
});


// socket.emit('createMessage', {
//   from: "zel",
//   text: "hello"
// }, function(data){
//   console.log(data);
// });


jQuery('#message-form').on('submit', function(e){
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function (){

  });
});
