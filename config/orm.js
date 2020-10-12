var connection = require("./connection.js");
var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (error, result) {
            if (error) {
                console.log("MYSQL SELECT QUERY ERROR: " + error);
            }
            console.log("Successfully selected all data.");
            console.log(result);
            callback(result);
        });
    },
    insertOne: function (burgerName, callback) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + burgerName + "', false)";
        connection.query(queryString, function (error, result) {
            if (error) {
                console.log("MYSQL INSERT QUERY ERROR: " + error);
            }
            console.log("New burger created: " + burgerName + "!");
            callback(result);
        });
    },
    updateOne: function (burgerStatus, burgerId, callback) {
        var queryString = "UPDATE burgers SET devoured = " + burgerStatus + " WHERE id = " + burgerId;

        connection.query(queryString, function (error, result) {
            if (error) {
                console.log("MYSQL UPDATE QUERY ERROR: " + error);
            } else if (result.affectedRows === 0) {
                console.log("MYSQL UPDATE QUERY ERROR: " + error);
            } else {
                console.log("Status of burger has been updated!");
            }
            callback(result);
        });
    }
}
module.exports = orm;