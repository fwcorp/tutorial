'use strict';
const aws = require('aws-sdk');
var s3 = new aws.S3();
var request = require('request');
var cheerio = require('cheerio');

var myBucket = 'jikguprice.com';
var myKey = 'stdcurrency.js';
var test = '';

exports.handler = (event, context, callback) => {

request.get({url:'https://www.iporter.com/ko/guide/customs-rates'}, function(err, response, body){
    let $ = cheerio.load(body);
    let arr = $('.rate-week').children();

    var stdcurrencyinfo ={
        "stdforex":{
            "us" : 1187.21,
            "eu" : 1303.8,
            "jp" : 10.8916,
            "cn" : 170.66,
            "uk" : 1549.36
        },
        "date": "2/1 ~ 2/29"
    }

    arr.each(function(i,elem){
        if(i==0){
            stdcurrencyinfo.stdforex.us = $(this).children('.point-o').text();
        }else if(i==1){
            stdcurrencyinfo.stdforex.jp = $(this).children('.point-o').text();
        }else if(i==2){
            stdcurrencyinfo.stdforex.cn = $(this).children('.point-o').text();
        }else if(i==3){
            stdcurrencyinfo.stdforex.eu = $(this).children('.point-o').text();
        }else{
            stdcurrencyinfo.stdforex.uk = $(this).children('.point-o').text();
        }
        });

    let date = $('.txt-customs-rates02').text();
    let datereg = /\d\d\d\d.\d\d.\d\d/g;
    let match = date.match(datereg);
    stdcurrencyinfo.date = match[0] + " ~ " + match[1];

    var data = 'var stdcurrencyinfo=' + JSON.stringify(stdcurrencyinfo);
    var params = {Bucket: myBucket, Key : myKey, Body: data};
    test = data;
    try {
        s3.putObject(params, function(err, data){
            if(err){console.log(err);}
            else{console.log("successfully written to stdcurrency")};
        });
    }catch(e){
        console.log(e.message);
    }
});
request.on('error', function(err){
    console.log("error on loading page");
});
request.end();

    callback(null, test);
};