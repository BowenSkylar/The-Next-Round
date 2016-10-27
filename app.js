require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const router = express.Router();
const { getBeerByName } = require('./services/beer');
const { getBeers } = require('./models/savedBeers');

const homeRoute = require('./routes/index');
const favoritesRoute = require('./routes/favorites');

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.listen(port, () => console.log('Server is running on port', port));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use('/', homeRoute);
app.use('/favorites', favoritesRoute);




app.get('/results', getBeerByName, (req, res) => {
  res.render('beers', {
    beers: res.results,
  });
});

