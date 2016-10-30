const router = require('express').Router();
const { getBeers } = require('../models/savedBeers');


router.post('/favorites', getBeers, (req, res) => {
  // res.redirect('/favorites');
  res.render('favorites', {
    header: '-WELCOME TO YOUR TAB-',
  });
});

module.exports = router;
