const mysql = require("mysql2");
let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "hotel_booking",
  password: "huong1234",
});
module.exports = pool.promise();