const fs = require("fs");
const Booking = require("../models/booking");

module.exports = class BookingService {
    
    constructor() {}

   findBookings()
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            Booking.findAllBookings((err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

//    findBookingById(bookingId)
//    {        
//        // return promise (asynchronous function method)
//        // https://developers.google.com/web/fundamentals/primers/promises
//        return new Promise((resolve, reject) => {        
//             Booking.findBookingById(bookingId,(err, res) => {
//                 if (err) {
//                 reject(err);
//                 }
//                 resolve(res);
//             });
//        });
//    }

   findBookingByListingId(listingId,status)
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            Booking.findBookingByListingId(listingId,status,(err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   findBookingByUserId(userId,status)
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            Booking.findBookingByUserId(userId,status,(err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   findBookingByDate(startDate,endDate)
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            Booking.findBookingByDate(startDate,endDate,(err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

    createBooking(bookingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
    
                    Booking.createBooking(bookingReq, (err, res) => {
                        if (err) {
                          reject(err);
                        }
                        resolve(res);
                    });
        });
    }

    updateBooking(bookingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
    
                    Booking.updateBooking(bookingReq, (err, res) => {
                        if (err) {
                          reject(err);
                        }
                        resolve(res);
                    });
        });
    }

    deleteBooking(bookingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
    
                    Booking.deleteBooking(bookingReq, (err, res) => {
                        if (err) {
                          reject(err);
                        }
                        resolve(res);
                    });
        });
    }

}