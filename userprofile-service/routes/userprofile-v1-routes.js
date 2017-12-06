/**
 * @name userprofile-v1-api
 * @description This module packages the Userprofile API.
 */
'use strict';

const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();
const express = hydraExpress.getExpress();
const ServerResponse = require('fwsp-server-response');

let serverResponse = new ServerResponse();
express.response.sendError = function(err) {
  serverResponse.sendServerError(this, {result: {error: err}});
};
express.response.sendOk = function(result) {
  serverResponse.sendOk(this, {result});
};


var router = express.Router();//require('express').Router();

router.use('/api', require('./api'));

module.exports = router;

//module.exports = api;
