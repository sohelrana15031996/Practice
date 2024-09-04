class User {
  constructor(name, email, status) {
    this.name = name;
    this.email = email;
    this.status = status;
  }
}


// Inherited from User by following extend keywords
class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => user.email !== u.email)
  }
}

const userOne = new User('Sweety', 'nasrin151122@gmail.com', 'Online');
const userTwo = new User('Sohel', 'sohelrana266130@gmail.com');
const admin = new Admin('Anabia', 'anabia2024@gmail.com');


let users = [userOne, userTwo, admin];

admin.deleteUser(userTwo );
console.log(users);