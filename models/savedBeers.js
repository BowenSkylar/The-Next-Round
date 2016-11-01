const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');
const { getDB } = require('../lib/dbConnect.js');
// const bcrypt = require('bcryptjs');

const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/beer';
//add process.env connection^^^^

// show me all the saved beers in DB
function getBeers(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('mytab')
    // empty find shows all contents
     .find({userId: {$eq: req.session.userId}})
      .toArray((arrayError, data) => {
        // console.log('userI*********', req.session.userId)
        if (arrayError) return next(arrayError);
        // return the data inside of the res.favorites OBJ
        res.results = data;             // <- no es beer
        // console.log('data', res.results);
        db.close();
        return next();
      });
    return false;
  });
  return false;
}


function savedBeers(req, res, next) {
 // creating an empty object for the insertObj
  const insertObj = {};
 // copying all of req.body into insertObj
 for(key in req.body) {
   insertObj[key] = req.body[key];
 }
 // Adding userId to insertObj
  insertObj.userId = req.session.userId;
  getDB().then((db) => {
    db.collection('mytab')
     .insert(insertObj, (insertErr, result) => {
       if (insertErr) return next(insertErr);
       res.results = result;
       db.close();
       next();
     });
   return false;
  });
  return false;
}

// function deleteBeers(req, res, next) {
//   MongoClient.connect(dbConnection, (err, db) => {
//     if (err) return next(err);
//     db.collection('mytab')
//       .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, doc) => {
//         if (removeErr) return next(removeErr);
//         // return the data
//         res.removed = doc;
//         db.close();
//         return next();
//       });
//     return false;
//   });
//   return false;
// }

module.exports = { getBeers, savedBeers };
