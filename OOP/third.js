var add = function(){
  counter = 0;
  var plus = function(){
    counter += 1;
  };

  return counter;
}

a = add();
b = add();
console.log(a)
console.log(b)
