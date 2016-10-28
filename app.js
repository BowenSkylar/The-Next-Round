require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const router = require('express').Router();

const { getBeerByName } = require('./services/beer');
const { getBeers } = require('./models/savedBeers');

const app = express();
const port = process.env.PORT || 3000;
const indexRoute = require('./routes/index');
const favoritesRoute = require('./routes/favorites');

app.use(logger('dev'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => console.log('Well you didnt break it since its running on', port, '!!!!'));


app.use('/', indexRoute);
app.use('/favorites', favoritesRoute);

app.get('/results', getBeerByName, (req, res) => {
  res.render('beers', {
    beers: res.results,
  });
});


app.get('/', getBeers, (req, res) => {
  console.log(res.favorites);
  res.render('index', {
    results: res.results || [],
    favorites: res.favorites || [],
  });
});

// app.post('/favorites', favorites.saveFavorite, (req, res) => {
//   res.redirect('/');
// });

// app.delete('/favorites/:id', favorites.deleteFavorite, (req, res) => {
//   res.redirect('/');
// });
