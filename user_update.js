func1();

function func1()
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
  var sql = "INSERT INTO newusers (id, fname, sname, phonenum, emailid, password, gender) VALUES ('9', 'Cathy', 'Joseph', '989905900', 'cathijos@gmail.com','cathjsoYh@$3','female')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
}
