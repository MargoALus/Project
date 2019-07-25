var mysqlConn = require("../database/database");

//Task object constructor
var Booking = (booking) => {
    this.id = booking.id;
    this.listingId = booking.listingId;
    this.userId = booking.userId;
    this.hostId = booking.hostId;
    this.status = booking.status;
    this.dateStart = booking.dateStart;
    this.dateEnd = booking.dateEnd;
};

Booking.createBooking = (newBooking, result) => {
    mysqlConn.query("INSERT INTO bookings set ?", newBooking, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Booking.updateBooking = (newBooking, result) => {
    mysqlConn.query("UPDATE bookings SET listingId = ?, userId = ?, hostId = ?, status = ?, dateStart = ?, dateEnd = ? WHERE id = ?", [newBooking.listingId,newBooking.userId,newBooking.hostId,newBooking.status,newBooking.dateStart,newBooking.dateEnd,newBooking.id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};


Booking.findBookingById = (bookingId, result) => {
    mysqlConn.query("Select * from bookings where hostId = ?", bookingId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Booking.findBookingByListingId = (listingId, status, result) => {
    mysqlConn.query("Select * from bookings where listingId = ? and status = ?", [listingId, status], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Booking.findBookingByUserId = (userId, status, result) => {
    mysqlConn.query("Select * from bookings where userId = ? and status = ?", [userId, status], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Booking.findBookingByDate = (dateStart, dateEnd, result) => {
    mysqlConn.query("Select * from bookings where dateStart = ? and dateEnd = ?", [dateStart, dateEnd], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};


Booking.deleteBooking = (id, result) => {
    mysqlConn.query("DELETE FROM bookings where id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Booking.findAllBookings = (result) => {
    mysqlConn.query("Select * from bookings", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = Booking;