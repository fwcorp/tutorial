const request = require('axios');
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const {extractListingsFromHTML} = require('./helpers');

module.exports.test_function = (event, context, callback) => { 
  request('https://api.binance.com/api/v3/trades?symbol=BTCUSDT&limit=1')
    .then(({data}) => {      
      return dynamo.put({
        TableName: 'bitcoin_fw20',
        Item: {
          timestamp: Date.now(),
          price: data[0].price
        }
      }).promise();
    })
    .then(() => {
      callback(null, 'success');
    })
    .catch(callback);
};