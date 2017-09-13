var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should genrate correct message object', () => {
    var from = 'zel';
    var text = 'some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });

});
