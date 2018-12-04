'use strict';

require('dotenv').config();

var express = require('express');
var app = express();
var path = require('path');
var exphbs = require('express-handlebars');
var session = require('express-session');
var flash = require('connect-flash');
var validator = require('express-validator');

// config file imports
var cors = require('./cors');
var routes = require('./routes');


// static folder setup
app.use(express.static(path.join(__dirname,'public')));

// mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/nodeShop',{useNewUrlParser: true})
mongoose.set('useFindAndModify', false)

// passport
var passport = require('passport');

// flash initializing
app.use(flash());


require('./config/passport');
 
//passport and session initializing
app.use(session({
    secret: 'mrPoet',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());



// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

// bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// validator initializating
app.use(validator())

app.use(function(req, res, next){
 res.locals.session = req.session;
 next()
})
// initializing config files
//cors(app)
routes(app)




var port = process.env.PORT || 3000;
app.listen(port)
console.log(`server running on ${port}`)