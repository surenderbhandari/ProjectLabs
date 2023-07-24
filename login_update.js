func2();

function func2()
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
  var sql = "INSERT INTO loginusers (id,emailid,username,password) VALUES ('8', 'cwharry9@gmail.com','Harish', 'cwh1h3h45h@7$3#')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
}

