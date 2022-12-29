const db = require("../config/db");

let strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

module.exports = {
  getAll: (req, res) => {
    db.execute("SELECT*FROM users ")
      .then((data) => {
        console.log(data[0]);
        res.send(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  login: (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).json({
        message: "Invalid email or password",
      });
    }
    db.execute("SELECT * FROM users WHERE email=?", [email]).then((data) => {
      let find = data[0][0];
      if (!find) {
        res.status(404).json({
          message: "user is not exits",
        });
      } else {
        if (!find.password) {
          res.status(404).json({
            message: "wrong password",
          });
        } else if (find.password !== password) {
          res.status(200).json({
            status: "wrong",
            message: "sai passs",
          });
        } else {
          let user_info = find;
          res.cookie("userId", find.id, { signed: true });
          res.cookie("userEmail", find.email, { signed: true });
          res.cookie("role", find.role, { signed: true });
          res.status(200).json({
            status: "success",
            message: "login seccessfully",
            data: user_info,
          });
        }
      }
    });
  },
  createUser: (req, res) => {
    let { email, password, userName, lastName } = req.body;
    if (!email && !password && !userName) {
      return res.status(500).json({
        message: "Email end password , userName cannot be empty!",
      });
    } else if (!email && password && userName) {
      return res.status(500).json({
        message: "Email cannot be empty!",
      });
    } else if (email && !password && userName) {
      return res.status(500).json({
        message: "Password cannot be empty!",
      });
    } else if (email && password && !userName) {
      return res.status(500).json({
        message: "Username cannot be empty!",
      });
    } else if (!email && password && !userName) {
      return res.status(500).json({
        message: "Username end Email cannot be empty!",
      });
    } else if (email && !password && !userName) {
      return res.status(500).json({
        message: "Username end Password cannot be empty!",
      });
    } else if (!email && !password && userName) {
      return res.status(500).json({
        message: "Email end Password cannot be empty!",
      });
    } else {
      if (!strongRegex.test(password)) {
        return res.status(500).json({
          message: "Password is not strong enough",
        });
      } else {
        let id = Math.floor(Math.random() * 10000000);
        let avatar =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdodcL561XmFnCnITyVBcPHwS9RwbmlkFRQ&usqp=CAU";
        db.execute("SELECT*FROM users WHERE email=?", [email])
          .then((data) => {
            let [rows] = data;
            if (rows.length > 0) {
              return res.status(500).json({
                message: "user alreadey exits",
              });
            } else {
              return db.execute("INSERT INTO users VALUES(?,?,?,?,?,?,?) ", [
                id,
                email,
                password,
                userName,
                null,
                avatar,
                1,
              ]);
            }
          })
          .then((data) => {
            return res.status(200).json({
              message: "creat one successfully",
            });
          })
          .catch((err) => {
            return res.status(500).json({
              err: err,
            });
          });
      }
    }
  },
  resetPassword: (req, res) => {
    let { email } = req.body;
    if (!email) {
      return res.status(500).json({
        message: "Invalid email",
      });
    }
    db.execute("SELECT*FROM users WHERE email=?", [email]).then((data) => {
      let find = data[0][0];
      if (!find) {
        res.status(404).json({
          message: "Email is not exits",
        });
      } else {
        console.log("hien thi ra trang reset password");
        res.status(200).json({
          status: "success",
          message: "Email is exits",
        });
      }
    });
  },
};
