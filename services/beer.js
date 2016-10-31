const fetch = require('node-fetch');
const API_URL = 'http://api.brewerydb.com/v2/'; //  API_URL version two
const API_KEY = process.env.API_KEY;

//  function to get beer name

function getBeerByName(req, res, next) {
  console.log(req.query);
  fetch(`${API_URL}beers?name=${req.query.searchTerm}&key=${API_KEY}`)
  .then(r => r.json())
  .then((beers) => {
    console.log(beers.data);
    // console.log(req.query.searchTerm +'*************');
    res.dabeer = beers.data;
    next();
  })
.catch((err) => {
  res.err = err;
  next();
});
}

//  module.exports ={function name here};
module.exports = { getBeerByName };
