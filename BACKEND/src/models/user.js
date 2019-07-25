var mysqlConn = require("../database/database");

//Task object constructor
var User = (user) => {
    this.name = user.name;
    this.surname = user.surname;
    this.role = user.role;
    this.email = user.email;
    this.password = user.password;
};

User.createUser = (newUser, result) => {
    console.log(newUser);
    mysqlConn.query("INSERT INTO users set ?", newUser, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

User.findUserByEmailandPassword = (userEmail, userPassword, result) => { 
    mysqlConn.query("select * from users where (email = ? AND password = ?)", [userEmail, userPassword], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

User.findUserByEmail = (userEmail, result) => { 
    console.log(userEmail);
    mysqlConn.query("select * from users where email = ?", userEmail, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

User.findUserByRole = (userRole, result) => {
    mysqlConn.query("Select * from users where role = ?", userRole, (err, res) => {
        console.log("getting here");
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

User.findAllUsers = (result) => {
    mysqlConn.query("Select * from users", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};



module.exports = User;