const express = require("express");
const dbo = require("./connect");
const spawn = require("child_process").spawn;

 
const recordRoutes = express.Router();
 
// create a document in the collection
recordRoutes.route("/subscribe").post(function (req, response) {
  const connection = dbo.getDb();  
  collection = connection.collection("main")
  const subscription = {
    email: req.body.email,
    hashtag: req.body.hashtag,
    standardAlgorithm: req.body.standardAlgorithm,
    isEveryday: req.body.isEveryday
  };
  collection.insertOne(subscription, function (error, collectionResponse) {
    if (error) throw error;
    response.json(collectionResponse);
})});
  
module.exports = recordRoutes;
