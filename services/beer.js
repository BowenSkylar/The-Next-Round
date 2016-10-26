const fetch = require('node-fetch');
const API_URL = 'http://api.brewerydb.com/v2/'; //  API_URL version two

//  function to get beer name

function getBeerByName(req, res, next) {
  console.log(req.body);
  fetch(`${API_URL}key=${req.body.searchKey}`)
  .then(r => r.json())
  .then((data) => {
    res.results = data.results;
    next();
  })
.catch((err) => {
  res.err = err;
  next();
});
}


//  module.exports ={function name here};
module.exports = {getBeerByName};
