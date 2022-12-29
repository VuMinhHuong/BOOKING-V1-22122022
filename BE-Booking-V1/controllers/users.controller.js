const usersModel = require("../models/users.model");

// let strongRegex = new RegExp(
//   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// );

//getall
module.exports.getAll = usersModel.getAll;
// get homepage
// module.exports.getHomepage = usersModel.getHomePage;
// post login
module.exports.login = usersModel.login;
// createUser
module.exports.createUser = usersModel.createUser;
//resetPassword
module.exports.resetPassword = usersModel.resetPassword;
//updatePass
// module.exports.updatePass = usersModel.updatePass;
