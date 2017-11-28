var bodyParser = require("body-parser"),
methodOverride = require("method-override"),
mongoose = require("mongoose"),
express = require("express"),
app = express();

//change 'boiler-plate' to name of app.
mongoose.connect("mongodb://localhost/boiler-plate", {useMongoClient: true});
app.set("view engine", "ejs");
//to access custom stylesheets
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.render("home");
});

app.listen(3000);