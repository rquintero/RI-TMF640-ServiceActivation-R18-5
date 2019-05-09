'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToMonitorAttributeValueChangeNotification = function listenToMonitorAttributeValueChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToMonitorAttributeValueChangeNotification(req, res, next);
};

module.exports.listenToMonitorCreateNotification = function listenToMonitorCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToMonitorCreateNotification(req, res, next);
};

module.exports.listenToMonitorDeleteNotification = function listenToMonitorDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToMonitorDeleteNotification(req, res, next);
};

module.exports.listenToMonitorStateChangeNotification = function listenToMonitorStateChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToMonitorStateChangeNotification(req, res, next);
};

module.exports.listenToServiceAttributeValueChangeNotification = function listenToServiceAttributeValueChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceAttributeValueChangeNotification(req, res, next);
};

module.exports.listenToServiceCreateNotification = function listenToServiceCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCreateNotification(req, res, next);
};

module.exports.listenToServiceDeleteNotification = function listenToServiceDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceDeleteNotification(req, res, next);
};

module.exports.listenToServiceStateChangeNotification = function listenToServiceStateChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceStateChangeNotification(req, res, next);
};
