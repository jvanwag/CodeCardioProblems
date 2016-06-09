function canDrive(person) {
  if (person.age >= 16){
    return person.name +" is old enough to drive.";
  }
  else{
    return person.name + " is not old enough to drive.";
  }
}

function newCar(make, model) {
  return {make: make, model: model}
}

function changeEmail(user, newEmail) {
  user.email = newEmail;
  return user;
}

function getPerson() {
  return {name: "Jon", age: 25};
}

function addRole(user, string) {
  user.role = string;
  return user;
}

var p = {
    "p1": false,
    "p2": "value2",
    "p3": "value3"
};

function truthyObject(user) {
  for(var prop in user) {
    console.log(user[prop]);
    if(!user[prop]) {
      delete user[prop];
    }
//     else {
//       delete user[prop];
//     }
  }
  return user;
}

console.log(truthyObject(p));
