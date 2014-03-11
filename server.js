"use strict";

var express  = require("express"),
    mongoose = require("mongoose"),
    fs       = require("fs"),
    fixtures = require('pow-mongoose-fixtures');

var db       = mongoose.connect("mongodb://localhost:27017/blog"),
    app      = express();

var models_path = __dirname + "/models",
    walk = function (path) {
      fs.readdirSync(path).forEach(function (file) {
        var newPath = path + "/" + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
          if (/(.*)\.(js|coffee)/.test(file)) {
            require(newPath);
          }
        }
        else if (stat.isDirectory()) {
          walk(newPath);
        }
      });
    };
walk(models_path);


app.set("view engine", "jade");
app.set("views", "./views");

app.use(express.static("./public"));

fixtures.load(__dirname + '/fixtures', db);

var routes = require("./routes")(app);


var port = 3000;
app.listen(port);
console.log("My blog started on port " + port);