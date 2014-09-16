'use strict';

var express      = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    session      = require('express-session'),
    mongoStore   = require('connect-mongo')({ session: session }),
    mongoose     = require('mongoose'),
    fs           = require('fs'),
    moment       = require('moment'),
    passport     = require('passport'),
    flash        = require('connect-flash'),
    http         = require('http');

var config = require('./config/config'),
    db     = mongoose.connect(config.db),
    app    = express();


require('./config/passport')(passport);

app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('public'));

app.use(session({
  secret: config.sessionSecret,
  store: new mongoStore({
    db: db.connection.db,
    collection: config.sessionCollection
  }),
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

moment.locale('eu');
app.locals.moment = moment;

if (process.env.NODE_ENV === 'development') {
  var fixtures = require('pow-mongoose-fixtures');

  fixtures.load(__dirname + '/fixtures', db);
}

var routes = require('./routes')(app, passport);


var port = process.env.PORT || config.port;
app.listen(port);
console.log("My blog started on port " + port);
setInterval(function() {
  return http.get('blogbenatespina.herokuapp.com', function () {
    return console.log("Heroku, you cannot sleep!");
  });
}, 3300000);
