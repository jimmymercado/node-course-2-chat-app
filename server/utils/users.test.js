const expect = require('expect');

const {Users} = require('./users.js');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1, name: 'Jiz', room: 'Room 2'
    }, {
      id: 2, name: 'Jio', room: 'Room 3'
    }, {
      id: 3, name: 'Zel', room: 'Room 2'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Jim',
      room: 'Room1'
    };

    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });


  it('should remove user', () => {
    var userId = 1;
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = 99;
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = 1;
    var user = users.getUser(userId);
    console.log(user);
    expect(user.id).toBe(userId);

  });

  it('should not find user', () => {
    var userId = 99;
    var user = users.getUser(userId);
    //expect(user.id).toNotBe(2);
    expect(user).toNotExist();
  });


  it('should return names for Room 2', () => {
    var userList = users.getUserList('Room 2');

    expect(userList).toEqual(['Jiz', 'Zel']);
  });

  it('should return names for Room 3', () => {
    var userList = users.getUserList('Room 3');

    expect(userList).toEqual(['Jio']);
  });

});
