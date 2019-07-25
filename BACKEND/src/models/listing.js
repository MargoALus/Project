var mysqlConn = require("../database/database");

//Task object constructor
var Listing = (listing) => {
    this.hostId = listing.hostId;
    this.title = listing.title;
    this.description = listing.description;
    this.location = listing.location;
    this.numberOfPeople = listing.numberOfPeople;
    this.pricePerNight = listing.pricePerNight;
};

Listing.createListing = (newListing, result) => { // what does "newListing" represent here 
    mysqlConn.query("INSERT INTO listings set ?", newListing, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Listing.deleteListing = (listingId, result) => {
    mysqlConn.query("DELETE FROM listings where id = ?", listingId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Listing.updateListing = (newListing, result) => {
    mysqlConn.query("UPDATE listings SET hostId = ?, title = ?, description = ?, location = ?, pricePerNight = ?, numberOfPeople = ? WHERE id = ?", [newListing.hostId,newListing.title,newListing.description,newListing.location,newListing.pricePerNight,newListing.numberOfPeople,newListing.id], (err, res) => {
        // is there any way to write the above line in a more clean/ efficient way?
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Listing.findListingByUserId = (listingId, result) => {
    mysqlConn.query("Select * from listings where hostId = ?", listingId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Listing.findAllListings = (result) => {
    mysqlConn.query("Select * from listings", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = Listing;