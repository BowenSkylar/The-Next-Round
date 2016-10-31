const router = require('express').Router();
const { savedBeers } = require('../models/savedBeers');

router.post('/', savedBeers, (req, res) => {
  res.json('favorites', {
    header: '-WELCOME TO YOUR TAB-',
    beers: res.saved || [],
  });
});

module.exports = router;
