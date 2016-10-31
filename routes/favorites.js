const router = require('express').Router();
const { savedBeers } = require('../models/savedBeers');
const { authenticate } = require('../lib/auth');
const { getBeers } = require('../models/savedBeers');

//display saved beers
router.get('/',  authenticate, getBeers, (req, res) => {
  res.render('favorites', {
    header: 'Welcome To Your Tab',
    user: res.user,
    fav: res.results,



  });
});

//save function to save beers savedBeers
router.post('/',  authenticate, savedBeers, (req, res) => {
  res.render('favorites', {
    // user: res.user,
    header: 'Welcome To Your Tab',
    saved: res.saved || [],
    user: res.user,

  });
});

module.exports = router;
