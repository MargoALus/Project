const express = require('express');
const router = express.Router();

const UserService = require('../services/user-service');
const userService = new UserService();

// with services we need asynchronous functions due to the nature of JavaScript runtime environment
// Look at JavaScript concurrency model for more information

// get all 
router.get('/', (req,res) => {
    // asynchronous function call structure 
    userService.findUsers().then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});

// get by id
router.get('/:role', (req,res) => {
    // asynchronous function call structure 
    userService.findUserByRole(req.params.role).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

//create
router.post('/create', (req,res) => {
    // asynchronous function call structure 
    // console.log(req.body)
    userService.createUser(req.body).then(user => {
        // Success! I have a new user, here it is in the variable user.
        res.json(user);
    }).catch(err => {
        // There was some error, I have put it into this variable err
        res.json(err);
    });
});

//delete
router.delete('/delete/:id', (req,res) => {
    // asynchronous function call structure 
    userService.deleteUser(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;