const express = require('express');
const router = express.Router();

const AuthService = require('../services/auth-service');

const authServe = new AuthService();

//login
router.post('/login', (req,res) => {
    // asynchronous function call structure 
    authServe.login(req.body).then(user => {
        console.log(user); //we want to console.log the response
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

//register
router.post('/register', (req,res) => {
    // asynchronous function call structure 
    authServe.register(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;