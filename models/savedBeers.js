const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');
// const bcrypt = require('bcryptjs');

const dbConnection = 'mongodb://localhost:27017/favoriteBeers'; // db name

// show me all the saved beers in DB
function getBeers(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('mytab')
    // empty find shows all contents
     .find({})
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);
        // return the data inside of the res.favorites OBJ
        res.results = data;             // <- no es beer
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

// INSERT new favorite beer into DB
function savedBeers(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('mytab')
    .insert(req.body.mytab, (insertErr, result) => {
      if (insertErr) return next(insertErr);
      res.saved = result;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}


function deleteBeers(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('mytab')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, doc) => {
        if (removeErr) return next(removeErr);

        // return the data
        res.removed = doc;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

module.exports = { getBeers, savedBeers, deleteBeers };
