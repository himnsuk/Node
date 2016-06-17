var Person = function (firstname, family) {
  this.firstname = firstname;
  this.family = family;
  console.log('Person Instantiated');
};


Person.prototype.getFull = function(){
  console.log(this.firstname + " " + this.family)
};
var person1 = new Person('Himanshu', 'Kesarvani');
var person2 = new Person('bob','Mathew');


person1.getFull()
