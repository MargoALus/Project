const fs = require("fs");
const Listing = require("../models/listing");

module.exports = class ListingService {
    
    constructor() {} //why is the constructor empty?

    findListings()
    {        
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
             Listing.findAllListings((err, res) => {
                 if (err) {
                 reject(err);
                 }
                 resolve(res);
             });
        });
    }

    findListingByUserId(listingId)
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            Listing.findListingByUserId(listingId,(err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   createListing(listingReq) { //should I change this to "addListing" so it matches up with the post function?
    // return promise (asynchronous function method)
    // https://developers.google.com/web/fundamentals/primers/promises
    return new Promise((resolve, reject) => {

                Listing.createListing(listingReq, (err, res) => {
                    if (err) {
                      reject(err);
                    }
                    resolve(res);
                });
    });
}

updateListing(listingReq) {
    // return promise (asynchronous function method)
    // https://developers.google.com/web/fundamentals/primers/promises
    return new Promise((resolve, reject) => {

                Listing.updateListing(listingReq, (err, res) => {
                    if (err) {
                      reject(err);
                    }
                    resolve(res);
                });
    });
}

deleteListing(listingReq) {
    // return promise (asynchronous function method)
    // https://developers.google.com/web/fundamentals/primers/promises
    return new Promise((resolve, reject) => {

                Listing.deleteListing(listingReq, (err, res) => {
                    if (err) {
                      reject(err);
                    }
                    resolve(res);
                });
    });
}
}