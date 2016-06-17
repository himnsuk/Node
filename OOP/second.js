var Person = function(firstname){
  this.firstname = firstname;
}

Person.prototype.talk = function(){
  console.log("I am talking");
};


Person.prototype.sayHello = function(){
  console.log("Hello! i'm " + this.firstname);
};

var Student = function(firstname, subject){
  
  Person.call(this, firstname);

  this.subject = subject;
};


Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;


Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstname + ". I'm studying "
              + this.subject + ".");
};


var student1 = new Student('Janet', "Applied Physics");

student1.sayHello();
