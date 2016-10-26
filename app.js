require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const { findArtist } = require('./services/beer');


const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.listen(port, () => console.log('Server is running on port', port));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', {
    heading: 'Hello Skylar!!',
  });
});
