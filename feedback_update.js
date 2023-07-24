func3();

function func3()
{
    var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a1r2i3f4@Q",
  database: "projectlas"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO feedbacks (user_email, msg) VALUES ('rajiv@gmail.in','Reduced my efforts to find a problem statement for my project')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
}