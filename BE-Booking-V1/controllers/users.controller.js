const usersModel = require("../models/users.model");

// let strongRegex = new RegExp(
//   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// );

//getall
module.exports.getAll = usersModel.getAll;
