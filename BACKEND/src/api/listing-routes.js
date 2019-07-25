const express = require('express');
const router = express.Router();

const ListingService = require('../services/listing-service');
const listingServer = new ListingService();

// with services we need asynchronous functions due to the nature of JavaScript runtime environment
// Look at JavaScript concurrency model for more information

// get all 
router.get('/', (req,res) => {
    // asynchronous function call structure 
    listingServer.findListings().then(listings => {
        res.json(listings);
    }).catch(err => {
        res.json(err);
    });
});

// get by user id
router.get('/:userId', (req,res) => {
    // asynchronous function call structure 
    listingServer.findListingByUserId(req.params.userId).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

//create
router.post('/add', (req,res) => {
    // asynchronous function call structure 
    listingServer.createListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

//delete (listing id)
router.delete('/delete/:id', (req,res) => {
    // asynchronous function call structure 
    listingServer.deleteListing(req.params.id).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

//update
router.post('/update', (req,res) => {
    // asynchronous function call structure 
    listingServer.updateListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;