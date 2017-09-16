[{
  id: 'adfasdafdagpire',
  name: 'Jim',
  room: 'Room1'
}]

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)
//
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription (){
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }
//
// var me = new Person('Jim', 40);
// var description = me.getUserDescription();
// console.log(description);

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  getUser (id) {
    //return user
    //return this.users.filter((user) => user.id === id)[0];
    var ids = this.users.filter((user) => user.id === id);
    return ids[0];
  }

  removeUser (id) {
    //retunr user that was removed
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }



  getUserList (room) {
    var users = this.users.filter((user) => {
      return user.room === room;
    });

    var namesArray = users.map((user) => {
      return user.name;
    });

    return namesArray;
  }


}

module.exports = {Users};
