var add = (function(){
  counter = 0;
  return function() { counter += 1;};
})();


console.log(add());

