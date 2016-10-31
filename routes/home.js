const router = require('express').Router();

router.get('/', (req, res)=>{
  res.render('home/index', {
    header: 'The Next Round',
  });
});

module.exports = router;
