const router = require('express').Router();
const { getBeers } = require('../models/savedBeers');
const { getBeerByName } = require('../services/beer');


router.get('/', getBeerByName, getBeers, (req, res) => {
  // res.json(res.dabeer);
  res.render('search/index', {
    heading: 'The Next Round',
    beers: res.beer || [],
  });
});

module.exports = router;
