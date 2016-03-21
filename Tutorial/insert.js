
var con = require('./connection');
console.log(con);
debugger;
var article = {
  author: "Himanshu Kesarvani",
  title: "The beaten sword",
  body: "This is just testing of connecting sql database and posting values"
}

var query = con.connection.query("INSERT INTO articles SET ?", article, function(err, result){
  if(err){
    console.error(err);
    return;
  }
  console.log(result);
});
