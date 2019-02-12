'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = require('axios-mock-adapter');

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

var _utils = require('redux-saga/utils');

var _apiSaga = require('../../sagas/apiSaga');

var _apiSaga2 = _interopRequireDefault(_apiSaga);

var _requestTypes = require('../../apis/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _actionTypes = require('../../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can use any testing library
var reqBody = { "name": "Savitha", "personContacted": "Patient with Guardian", "placeOfService": "State Supported Living Center", "contactType": "Correspondence", "appointmentType": "Cancelled by Provider", "billingType": "Expanded Problem-Focused", "intesityType": "Moderate", "addOnModifier": "Enrichment Service", "labType": "Urine Drug Screen", "outsideFacility": "Outside Facility C", "ebp_ss1": "Assertive Community Treatment", "category": "Indicated" };

describe('apiSaga', function () {
    it("should call get apiSaga", function () {
        var generator = (0, _apiSaga2.default)();

        var result = generator.next({});
        (0, _expect2.default)(result.value.FORK.args).toEqual([_actionTypes.GET_REQUEST, _apiSaga.getData]);
    });
});

describe('getData from apiSaga', function () {
    it('Success case', function () {
        var action = {
            type: _actionTypes.GET_REQUEST,
            payload: "patients"
        };
        var testLoad = (0, _apiSaga.getData)(action);
        testLoad.next(_requestTypes2.default.get);
        var result = testLoad.next({ a: 1 });
        (0, _expect2.default)(result.value.PUT.action).toEqual({ type: _actionTypes.RECEIVE_API_DATA_PDV_DATA, payload: { a: 1 } });
    });

    it('Failure case', function () {
        var action = {
            type: _actionTypes.GET_REQUEST,
            payload: "pati"
        };
        var testLoad = (0, _apiSaga.getData)(action);
        testLoad.next(_requestTypes2.default.get);
        var result = testLoad.next();
        (0, _expect2.default)(result.value.PUT.action.payload).toEqual(undefined);
    });
});

describe('getData PL from apiSaga', function () {
    it('Success case', function () {
        var action = {
            type: _actionTypes.GET_REQUEST_PL,
            payload: "patients"
        };
        var testLoad = (0, _apiSaga.getPLData)(action);
        testLoad.next(_requestTypes2.default.get);
        var result = testLoad.next({ a: 1 });
        (0, _expect2.default)(result.value.PUT.action).toEqual({ type: _actionTypes.RECEIVE_API_DATA_PDV_DATA, payload: { a: 1 } });
    });

    it('Failure case', function () {
        var action = {
            type: _actionTypes.GET_REQUEST_PL,
            payload: "pati"
        };
        var testLoad = (0, _apiSaga.getPLData)(action);
        testLoad.next(_requestTypes2.default.get);
        var result = testLoad.next();
        (0, _expect2.default)(result.value.PUT.action.payload).toEqual(undefined);
    });
});

describe('post from apiSaga', function () {
    it('Success case', function () {
        var action = {
            type: _actionTypes.POST_REQUEST,
            payload: {
                partialUrl: "patients",
                reqBody: reqBody
            }
        };
        var testLoad = (0, _apiSaga.postData)(action);
        testLoad.next(_requestTypes2.default.post);
        var result = testLoad.next({ a: 1 });
        (0, _expect2.default)(result.value.PUT.action).toEqual({ type: _actionTypes.RECEIVE_API_DATA_PDV_DATA, payload: { a: 1 } });
    });

    it('Failure case', function () {
        var action = {
            type: _actionTypes.POST_REQUEST,
            payload: "pati"
        };
        var testLoad = (0, _apiSaga.postData)(action);
        testLoad.next(_requestTypes2.default.post);
        var result = testLoad.next();
        (0, _expect2.default)(result.value.PUT.action.payload).toEqual(undefined);
    });
});

describe('put from apiSaga', function () {
    it('Success case', function () {
        var action = {
            type: _actionTypes.PUT_REQUEST,
            payload: {
                partialUrl: "patients",
                reqBody: reqBody,
                ids: "2"
            }
        };
        var testLoad = (0, _apiSaga.putData)(action);
        testLoad.next(_requestTypes2.default.put);
        var result = testLoad.next({ a: 1 });
        (0, _expect2.default)(result.value.PUT.action).toEqual({ type: _actionTypes.RECEIVE_API_DATA_PDV_DATA, payload: { a: 1 } });
    });

    it('Failure case', function () {
        var action = {
            type: _actionTypes.PUT_REQUEST,
            payload: "pati"
        };
        var testLoad = (0, _apiSaga.putData)(action);
        testLoad.next(_requestTypes2.default.put);
        var result = testLoad.next();
        (0, _expect2.default)(result.value.PUT.action.payload).toEqual(undefined);
    });
});