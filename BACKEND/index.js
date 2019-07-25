const express = require('express');
const fs = require("fs");
const userRoutes = require("./src/api/user-routes");
const authRoutes = require("./src/api/auth-routes");
const listingRoutes = require("./src/api/listing-routes");
const bookingRoutes = require("./src/api/booking-routes");

const app = express();
 
const PORT = process.env.PORT || 5000;

var userService = require('./src/models/user');

// Cross-Origin Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

//Body Parser Middlware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middleware function:
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Middleware execute:
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// app.get('/', (req,res) => {
//     res.send('<h1>Hello World!</h1>')
// });

//App routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/bookings", bookingRoutes); //<-- this is what's causing error right now


// app.get('/', (req,res) => { // NOTE: it should be a JSON response
//     console.log('ok');
//     res.json('let us kick ass');
// });

// app.post('/users', (req, res) => {
//     console.log(req.body);
//     var newUser = {firstname: req.body.firstname, lastname: req.body.lastname};
//     userService.createUser(newUser, (db_err, db_res) => {
//         if (db_err) {
//             console.log("error from db: " + db_err);
//             res.json('error connecting to db');
//         } else {
//             console.log(db_res);
//             res.json(db_res);
//         }
//     });
// });
//     // res.json('i hear you');

//     app.get('/users', (req, res) => {
//         userService.getAllUsers((db_err, db_res) => {
//             if (db_err) {
//                 console.log("error from db: " + db_err);
//                 res.json('error connecting to db');
//             } else {
//                 console.log(db_res);
//                 res.json(db_res);
//             }
//         });
//     });

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
