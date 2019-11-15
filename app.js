var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./src/utils/db');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var cardGameRouter = require('./src/routes/cardgame-router');
var gameFamilyRouter = require('./src/routes/gamefamily-router');
var gameVariantRouter = require('./src/routes/gamevariant-router');
var reviewRouter = require('./src/routes/review-router');

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
app.use('/gamevariant', gameVariantRouter);
app.use('/review', reviewRouter);

module.exports = app;
