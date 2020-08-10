// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// create burger object
var burger = {
    // select all burger table entries
    selectAll: function (cb) {
        orm.selectAll('burger', function (res) {
            cb(res);
        });
    },
    //variables and cols 
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function (res) {
            cb(res)
        });
    }
};
module.exports = burger;