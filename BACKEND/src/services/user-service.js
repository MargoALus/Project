const fs = require("fs");
const User = require("../models/user");

module.exports = class UserService {
    
    constructor() {}

   findUsers()
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            User.findAllUsers((err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   findUserById(userId)
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            User.findUserById(userId,(err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   findUserByEmail(userEmail)
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            User.findUserByEmail(userEmail,(err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   findUserByEmailandPassword(userEmail, userPassword)
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       console.log("entering find user by email and password")
       console.log(userEmail);
       console.log(userPassword);
       return new Promise((resolve, reject) => {        
            User.findUserByEmailandPassword(userEmail, userPassword, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else if (res.length > 0) {
                    console.log("we're in this bitch");
                    console.log(res);
                    resolve(res);
                }
                else {
                    console.log("FAILURE")
                    reject(false);
                }
            });
       });
   }


   findUserByRole(userRole)
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            User.findUserByRole(userRole,(err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

    createUser(userReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        // console.log(userReq)
        return new Promise((resolve, reject) => {
            User.findUserByEmail(userReq.email, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                console.log(res);
                if (res.length < 1) { // create user
                    User.createUser(userReq, (err, res) => {
                        if (err) {
                          reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("user already exists");
                }
            })
        });
    }

    deleteUser(userId) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            fs.readFile("./src/data/data.json", (err,data) => {
                if (err) { reject(err); } // reject error in promise
                else if (data) {
                    let users = JSON.parse(data);
                    const found = users.users.some(user => user.id === userId);
                    if (found) {
                        users.users = users.users.filter(user => user.id != userId);

                        fs.writeFile("./src/data/data.json", JSON.stringify(users), (err) => {
                            if (err) {
                                reject(err); // reject error in promise
                            }
                        });

                        resolve("user was deleted"); // resolve promise to return value
                    }  
                    else {
                        resolve("user doesn't exist"); // resolve promise to return value
                    }
                }
            });
        });
    }

}