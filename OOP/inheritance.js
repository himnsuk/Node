
var Person = function(firstname){
  this.firstname = firstname;
}

Person.prototype.sayHello = function(){
  console.log("Hi, I am" + this.firstname);
}


var Student = function(firstname, subject){
  this.firstname = firstname;
  this.subject = subject;
  Person.call(this, firstname);
}


Student.prototype = Object.create(Person.prototype);

Student.prototype.sayHello = function(){
  console.log("Hi, I am" + this.firstname + "and i am currently studing" + this.subject);
}

var person1 = new Person("Hermoine");
var student1 = new Student("Himanshu", "Physics");
student1.sayHello();
person1.sayHello();
console.log(student1.constructor);
console.log(person1.constructor);
