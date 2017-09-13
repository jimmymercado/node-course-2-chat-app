var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should genrate correct message object', () => {
    var from = 'zel';
    var text = 'some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });

});


describe('generateLocationMessage', () =>{
  it('should generate correct location object', () => {
    var location = generateLocationMessage('Admin', 1, 1);

    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({from: 'Admin', url:'https://www.google.com/maps?q=1,1'});
  });
});
