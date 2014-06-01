'use strict';

var express      = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    session      = require('express-session'),
    MongoStore   = require('connect-mongo')(session),
    mongoose     = require('mongoose'),
    fs           = require('fs'),
    moment       = require('moment'),
    fixtures     = require('pow-mongoose-fixtures'),
    passport     = require('passport'),
    flash        = require('connect-flash');


var config = require('./config/config'),
    db     = mongoose.connect(config.db),
    app    = express();


require('./config/passport')(passport);

app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('public'));

app.use(session({
  secret: config.secret, store: new MongoStore({db: config.app.name})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

moment.lang('eu');
app.locals.moment = moment;

if (process.env.NODE_ENV === 'development') {
  fixtures.load(__dirname + '/fixtures', db);
}

var routes = require('./routes')(app, passport);


var port = process.env.PORT || config.port;
app.listen(port);
console.log("My blog started on port " + port);