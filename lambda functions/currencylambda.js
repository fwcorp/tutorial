'use strict';
const aws = require('aws-sdk');
var http = require('http');
var s3 = new aws.S3();

// 버킷 이름은 모든 S3 사용자에게 고유한 것이어야 합니다.

var myBucket = 'jikguprice.com';

var myKey = 'currency.js';


exports.handler = (event, context, callback) => {

http.get('http://apilayer.net/api/live?access_key=1e3575919fdca1e4b28f748cf71d1914&currencies=KRW,CNY,JPY,GBP,EUR&format=1', (res) => {
  const statusCode = res.statusCode;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\n` +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error(`Invalid content-type.\n` +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.log(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => rawData += chunk);
  res.on('end', () => {
    try {
      
      
     var tmpdata = 'var currencyinfo='+rawData.toString();
     var params = {Bucket: myBucket, Key: myKey, Body: tmpdata};

     s3.putObject(params, function(err, data) {

         if (err) {

             console.log(err);

         } else {

             console.log("Successfully uploaded data to myBucket/myKey");

         }

      });

 
      
    } catch (e) {
      console.log(e.message);
    }
  });
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});



    callback(null, 'Hello from Lambda');
};