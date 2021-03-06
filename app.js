var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var roles = require('./routes/roles');
var questions = require('./routes/questions');
var comments = require('./routes/comments');
var choices = require('./routes/options');
var vote = require('./routes/vote');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/auth/users', users);
app.use('/auth/roles', roles);
app.use('/api/question', questions);
app.use('/api/comments', comments);
app.use('/api/options', choices);
app.use('/api/vote', vote);

module.exports = app;
