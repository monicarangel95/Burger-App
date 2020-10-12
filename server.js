var bodyParser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgersControllers.js");
app.use(routes);
app.use(express.static("./public"));
app.listen(PORT, function() {
	console.log("This app is listening on PORT: " + PORT + ".");
});