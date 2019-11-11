var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./src/utils/db');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var cardGameRouter = require('./src/routes/cardgame-route');
var gameFamilyRouter = require('./src/routes/gamefamily-router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cardgame', cardGameRouter);
app.use('/gamefamily', gameFamilyRouter);

module.exports = app;
