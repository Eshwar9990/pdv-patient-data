"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getData = getData;
exports.getPLData = getPLData;
exports.postData = postData;
exports.putData = putData;
exports.default = apiSaga;

var _effects = require("redux-saga/effects");

var _apiPdvDataActions = require("../actions/apiPdvDataActions");

var _apiPdvDataActions2 = _interopRequireDefault(_apiPdvDataActions);

var _requestTypes = require("../apis/requestTypes");

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _actionTypes = require("../actionTypes/actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getData),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(getPLData),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(postData),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(putData),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(apiSaga);

function getData(action) {
	var data;
	return regeneratorRuntime.wrap(function getData$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.call)(_requestTypes2.default.get, action.payload);

				case 2:
					data = _context.sent;
					_context.next = 5;
					return (0, _effects.put)(_apiPdvDataActions2.default.receiveApiData(data));

				case 5:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this);
}

function getPLData(action) {
	var data;
	return regeneratorRuntime.wrap(function getPLData$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_requestTypes2.default.get, action.payload);

				case 2:
					data = _context2.sent;
					_context2.next = 5;
					return (0, _effects.put)(_apiPdvDataActions2.default.receiveApiData(data));

				case 5:
				case "end":
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

function postData(action) {
	var data;
	return regeneratorRuntime.wrap(function postData$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					console.log('Action in apiSaga: ', action);
					_context3.next = 3;
					return (0, _effects.call)(_requestTypes2.default.post, action.payload);

				case 3:
					data = _context3.sent;
					_context3.next = 6;
					return (0, _effects.put)(_apiPdvDataActions2.default.receiveApiData(data));

				case 6:
				case "end":
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

function putData(action) {
	var data;
	return regeneratorRuntime.wrap(function putData$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					console.log('Action in apiSaga: ', action);
					_context4.next = 3;
					return (0, _effects.call)(_requestTypes2.default.put, action.payload);

				case 3:
					data = _context4.sent;
					_context4.next = 6;
					return (0, _effects.put)(_apiPdvDataActions2.default.receiveApiData(data));

				case 6:
				case "end":
					return _context4.stop();
			}
		}
	}, _marked4, this);
}

function apiSaga() {
	return regeneratorRuntime.wrap(function apiSaga$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					_context5.next = 2;
					return (0, _effects.takeLatest)(_actionTypes.GET_REQUEST, getData);

				case 2:
					_context5.next = 4;
					return (0, _effects.takeLatest)(_actionTypes.GET_REQUEST_PL, getPLData);

				case 4:
					_context5.next = 6;
					return (0, _effects.takeLatest)(_actionTypes.POST_REQUEST, postData);

				case 6:
					_context5.next = 8;
					return (0, _effects.takeLatest)(_actionTypes.PUT_REQUEST, putData);

				case 8:
				case "end":
					return _context5.stop();
			}
		}
	}, _marked5, this);
}