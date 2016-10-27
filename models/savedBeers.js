const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');


const dbConnection = 'mongodb://localhost:27017/favoriteBeers'; // db name


function getBeers(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('mytab')
    .insert(req.body.favorite, (insertErr, result) => {
      if (insertErr) return next(insertErr);

      res.saved = result;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}

function savedBeers(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('mytab')
    .insert(req.body.favorite, (insertErr, result) => {
      if (insertErr) return next(insertErr);

      res.saved = result;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}

module.exports = { getBeers, savedBeers };
