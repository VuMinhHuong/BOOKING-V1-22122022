const db = require("../config/db");

module.exports = 
    {
        getAll : (req, res) => {
            db.execute("SELECT*FROM users ")
                .then((data) => {
                console.log(data[0]);
                res.send(data[0]);
                })
                .catch((err) => {
                console.log(err);
                });
            },
    }
