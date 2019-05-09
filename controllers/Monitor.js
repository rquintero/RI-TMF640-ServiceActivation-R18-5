'use strict';

var url = require('url');

var Monitor = require('../service/MonitorService');

module.exports.listMonitor = function listMonitor (req, res, next) {
  Monitor.listMonitor(req, res, next);
};

module.exports.retrieveMonitor = function retrieveMonitor (req, res, next) {
  Monitor.retrieveMonitor(req, res, next);
};
