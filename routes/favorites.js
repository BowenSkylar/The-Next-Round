const router = require('express').Router();

const { savedBeers } = require('../models/savedBeers');
const { authenticate } = require('../lib/auth');
const { getBeers } = require('../models/savedBeers');

//  display saved beers
// savedBeers,
router.get('/', authenticate, getBeers, (req, res) => {
  console.log('faves *** ', res.results);
  res.render('favorites', {
    header: 'Welcome To Your Tab',
    user: res.user,
    fav: res.results || [],
        // saved: res.saved || [],

  });
});

//  save function to save beers savedBeers
router.post('/', authenticate, savedBeers, getBeers, (req, res) => {
  console.log('post **');
  res.render('favorites', {
    // user: res.user,
    header: 'Welcome To Your Tab',
    saved: res.saved || [],
    user: res.user || [],
    fav: res.results,


  });
});

module.exports = router;
