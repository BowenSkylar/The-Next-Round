require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const router = require('express').Router();

const app = express();
const port = process.env.PORT || 3000;
const indexRoute = require('./routes/index');
const favoritesRoute = require('./routes/favorites');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => console.log('Well you didnt break it since its running on', port, '!!!!'));


app.use('/', indexRoute);
app.use('/favorites', favoritesRoute);

