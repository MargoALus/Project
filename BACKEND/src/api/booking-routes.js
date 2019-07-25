const express = require('express');
const router = express.Router();

const BookingService = require('../services/booking-service');
const bookingServer = new BookingService();

// with services we need asynchronous functions due to the nature of JavaScript runtime environment
// Look at JavaScript concurrency model for more information

// get all 
router.get('/', (req,res) => {
    // asynchronous function call structure 
    bookingServer.findBookings().then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});

// // get by id
// router.get('/:Id', (req,res) => {
//     // asynchronous function call structure 
//     bookingServer.findBookingById(req.params.Id).then(booking => {
//         res.json(booking);
//     }).catch(err => {
//         res.json(err);
//     });
// });

// get by 
router.get('/listing/:listingId/:status', (req,res) => {
    // asynchronous function call structure 
    bookingServer.findBookingByListingId(req.params.listingId,req.params.status).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

//get by
router.get('/user/:userId/:status', (req,res) => {
    // asynchronous function call structure 
    bookingServer.findBookingByUserId(req.params.userId,req.params.status).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

//get by
router.get('/date/:startDate/:endDate', (req,res) => {
    // asynchronous function call structure 
    bookingServer.findBookingByDate(req.params.startDate,req.params.endDate).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

//create
router.post('/add', (req,res) => {
    // asynchronous function call structure 
    bookingServer.createBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

router.post('/update', (req,res) => {
    // asynchronous function call structure 
    bookingServer.updateBooking(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

router.delete('/delete/:id', (req,res) => {
    // asynchronous function call structure 
    bookingServer.deleteBooking(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;






