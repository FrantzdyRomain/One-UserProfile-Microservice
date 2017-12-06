/**
* @name Userprofile
* @summary Userprofile Hydra Express service entry point
* @description userprofile login auth
*/
'use strict';

require('./models/User'); 
require('./config/passport');

const version = require('./package.json').version;
const hydraExpress = require('hydra-express');

var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'), 
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');


let config = require('fwsp-config');

var isProduction = process.env.NODE_ENV === 'production';
if(isProduction){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://lunamongo:Nuvenoluna3000@ec2-18-221-170-234.us-east-2.compute.amazonaws.com:27017/bluebookhomeDB');
  mongoose.set('debug', true);
}
/**
* Load configuration file and initialize hydraExpress app
*/
config.init('./config/config.json')
  .then(() => {
    config.version = version;
    return hydraExpress.init(config.getObject(), version, () => {
      hydraExpress.registerRoutes({
        '/v1/userprofile': require('./routes/userprofile-v1-routes')
      });
    });
  })
  .then(serviceInfo => console.log('serviceInfo', serviceInfo))
  .catch(err => console.log('err', err));
