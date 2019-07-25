const UserService = require('./user-service');
const userServer = new UserService();
const fs = require("fs");

module.exports = class AuthService {
    constructor() {}

    login(userInput) {
        console.log(userInput);
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {  
            userServer.findUserByEmailandPassword(userInput.email, userInput.password).then(user=> {
                console.log("we are in auth service login");
                console.log(user);
                resolve(user); // resolve promise to return value 
            }).catch(err => {
                reject(err); // reject error in promise
            });  
        });
    }

// , (err,res) => {
//                 if (err) { 
//                     console.log(err);
//                     reject(err); 
//                 }    
//                 else if (res) {
//                     console.log("we're inside auth-service login!");
//                     console.log(res);
//                     resolve(res); // this could either be false or user that exists 
    register(user) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => { 
            User.createUser(user).then(userReturned => {
                resolve(userReturned); // resolve promise to return value
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }

}