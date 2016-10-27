require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const { getBeerByName } = require('./services/beer');


const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.listen(port, () => console.log('Server is running on port', port));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));





app.get('/results', getBeerByName, (req, res) => {
  res.render('beers', {
    beers: res.results,
  });
});

app.get('/', (req, res) => {
  res.render('index', {
    heading: 'Search Beer Database',
  });
});
