const router = require('express').Router();
const { getBeers } = require('../models/savedBeers');
const { getBeerByName } = require('../services/beer');


router.get('/', getBeerByName, getBeers, (req, res) => {
  // res.json(res.dabeer);
  res.render('index', {
    heading: 'The Next Round',
    beers: res.dabeer,
  });
});

module.exports = router;
