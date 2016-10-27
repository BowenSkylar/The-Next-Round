const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {
    heading: 'Search Beer Database',
  });
});

module.exports = router;
