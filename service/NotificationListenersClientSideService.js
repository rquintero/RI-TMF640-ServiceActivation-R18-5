'use strict';

//Minimal Service with filtering (equality match only) and attribute selection
//Error Handing Need to define a global error hqndler
//Paging and Range based Iterator to be added
//Notification to be added add listener and implement hub

const util = require('util');
const uuid = require('uuid');

const mongoUtils = require('../utils/mongoUtils');
const swaggerUtils = require('../utils/swaggerUtils');
const notificationUtils = require('../utils/notificationUtils');

const {sendDoc} = require('../utils/mongoUtils');

const {setBaseProperties, traverse, 
       addHref, processCommonAttributes } = require('../utils/operationsUtils');

const {validateRequest} = require('../utils/ruleUtils');

const {processAssignmentRules} = require('../utils/operations');

const {getPayloadType, getPayloadSchema, getResponseType} = require('../utils/swaggerUtils');

const {updateQueryServiceType, updatePayloadServiceType, cleanPayloadServiceType} = require('../utils/swaggerUtils');

const {TError, TErrorEnum, sendError} = require('../utils/errorUtils');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

exports.listenToMonitorAttributeValueChangeNotification = function(req, res, next) {
  /**
   * Client listener for entity MonitorAttributeValueChangeNotification
   * Example of a client listener for receiving the notification MonitorAttributeValueChangeNotification
   *
   * data MonitorAttributeValueChangeNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToMonitorAttributeValueChangeNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToMonitorAttributeValueChangeNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToMonitorAttributeValueChangeNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToMonitorAttributeValueChangeNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToMonitorAttributeValueChangeNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToMonitorAttributeValueChangeNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToMonitorCreateNotification = function(req, res, next) {
  /**
   * Client listener for entity MonitorCreateNotification
   * Example of a client listener for receiving the notification MonitorCreateNotification
   *
   * data MonitorCreateNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToMonitorCreateNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToMonitorCreateNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToMonitorCreateNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToMonitorCreateNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToMonitorCreateNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToMonitorCreateNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToMonitorDeleteNotification = function(req, res, next) {
  /**
   * Client listener for entity MonitorDeleteNotification
   * Example of a client listener for receiving the notification MonitorDeleteNotification
   *
   * data MonitorDeleteNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToMonitorDeleteNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToMonitorDeleteNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToMonitorDeleteNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToMonitorDeleteNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToMonitorDeleteNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToMonitorDeleteNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToMonitorStateChangeNotification = function(req, res, next) {
  /**
   * Client listener for entity MonitorStateChangeNotification
   * Example of a client listener for receiving the notification MonitorStateChangeNotification
   *
   * data MonitorStateChangeNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToMonitorStateChangeNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToMonitorStateChangeNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToMonitorStateChangeNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToMonitorStateChangeNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToMonitorStateChangeNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToMonitorStateChangeNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToServiceAttributeValueChangeNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceAttributeValueChangeNotification
   * Example of a client listener for receiving the notification ServiceAttributeValueChangeNotification
   *
   * data ServiceAttributeValueChangeNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceAttributeValueChangeNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceAttributeValueChangeNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceAttributeValueChangeNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceAttributeValueChangeNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceAttributeValueChangeNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceAttributeValueChangeNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToServiceCreateNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceCreateNotification
   * Example of a client listener for receiving the notification ServiceCreateNotification
   *
   * data ServiceCreateNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceCreateNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceCreateNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceCreateNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceCreateNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceCreateNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceCreateNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToServiceDeleteNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceDeleteNotification
   * Example of a client listener for receiving the notification ServiceDeleteNotification
   *
   * data ServiceDeleteNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceDeleteNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceDeleteNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceDeleteNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceDeleteNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceDeleteNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceDeleteNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToServiceStateChangeNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceStateChangeNotification
   * Example of a client listener for receiving the notification ServiceStateChangeNotification
   *
   * data ServiceStateChangeNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceStateChangeNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceStateChangeNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceStateChangeNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceStateChangeNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceStateChangeNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceStateChangeNotification: error=" + error.toString());
      sendError(res, error);
    });



};



