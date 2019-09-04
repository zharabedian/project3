"use strict";
const MongoClient = require('mongodb').MongoClient;
// const MONGODB_URI = Include databse connection here
const AWS = require('aws-sdk');
const SNS = new AWS.SNS({ apiVersion: '2010-03-31' });
let contactnumber;
let contactname;
let address;
let medications;
let allergies;
let history;
let emergencycontact1;
let emergencycontact1phone;
let cachedDb = null;
​
​
function connectToDatabase(uri) {
  console.log('=> connect to database');
​
  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }
​
  return MongoClient.connect(uri)
    .then(client => {
      cachedDb = client;
      return cachedDb;
    })
    .catch(err => { console.log(err); });
}
​
function queryDatabase(client, serialNumber) {
  console.log('=> query database');
  return client.db('heroku_nbgx1grb').collection('books').find({ serialNumber: `${serialNumber}` }).toArray()
    .then(serialNum => { return { statusCode: 200, body: 'success', result: serialNum }; })
    .then()
    .catch(err => {
      console.log('=> an error occurred: ', err);
      return { statusCode: 500, body: 'error' };
    });
}
​
module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log(event);
  console.log(event.deviceInfo.deviceId);
  let serialNumber = event.deviceInfo.deviceId;
  console.log(serialNumber);
  connectToDatabase(MONGODB_URI)
    .then(db => queryDatabase(db, serialNumber))
    .then(result => {
      contactnumber = result.result[0].phoneNumber;
      contactname = result.result[0].name;
      address = result.result[0].address;
      history = result.result[0].history;
      medications = result.result[0].medications;
      allergies = result.result[0].allergies;
      emergencycontact1 = result.result[0].eContactName;
      emergencycontact1phone = result.result[0].eContactPhoneNumber;
​
​
​
      console.log('=> returning result: ', result);
      //console.log(contactnumber);
​
      console.log(contactnumber);
      const params = {
        PhoneNumber: contactnumber,
        Message: "URGENT! A ZEL alert has been received for " + contactname + ". Please check on them",
​
      };
      SNS.publish(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
        callback(null, result);
      });
​
      const params2 = {
        PhoneNumber: contactnumber,
        Message: "URGENT! A ZEL button has been activated at " +address+  " Patient Name: " +contactname+ ". Their Medical history is: " +history+ ". Medications: " +medications+ ". Allergies: " +allergies+ ". Emergency contact: " +emergencycontact1+ ". Emergency contact phone number: " +emergencycontact1phone,
        
      };
      SNS.publish(params2, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
        callback(null, result);
      });
​
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
​
​
​
​
};