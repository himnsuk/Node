var Person = function(firstname){
  this.firstname = firstname;
  this.sayHello = function(){
    console.log(firstname);
  }
}


var person1 = new Person();

person1.sayHello();

