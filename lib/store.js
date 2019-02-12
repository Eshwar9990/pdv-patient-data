'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _patientDataReducer = require('pdv-patient-list/lib/reducers/patientDataReducer');

var _patientDataReducer2 = _interopRequireDefault(_patientDataReducer);

var _apiPdvDataReducer = require('./reducers/apiPdvDataReducer');

var _apiPdvDataReducer2 = _interopRequireDefault(_apiPdvDataReducer);

var _notificationReducer = require('pdv-container/lib/reducers/notificationReducer');

var _notificationReducer2 = _interopRequireDefault(_notificationReducer);

var _apiSaga = require('./sagas/apiSaga');

var _apiSaga2 = _interopRequireDefault(_apiSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();

exports.default = (0, _redux.createStore)((0, _redux.combineReducers)({ patientDataReducer: _patientDataReducer2.default, apiPdvDataReducer: _apiPdvDataReducer2.default, notificationReducer: _notificationReducer2.default }), {}, (0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)(), sagaMiddleware));


sagaMiddleware.run(_apiSaga2.default);