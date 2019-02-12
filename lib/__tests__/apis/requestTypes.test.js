'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = require('axios-mock-adapter');

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

var _requestTypes = require('../../apis/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _actionTypes = require('../../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('requestTypes', function () {
    var mock = new _axiosMockAdapter2.default(_axios2.default);
    var data = { response: true };
    var reqBody = { "name": "Savitha", "personContacted": "Patient with Guardian", "placeOfService": "State Supported Living Center", "contactType": "Correspondence", "appointmentType": "Cancelled by Provider", "billingType": "Expanded Problem-Focused", "intesityType": "Moderate", "addOnModifier": "Enrichment Service", "labType": "Urine Drug Screen", "outsideFacility": "Outside Facility C", "ebp_ss1": "Assertive Community Treatment", "category": "Indicated" };

    it('test for get success axios', function (done) {
        mock.onGet('http://localhost:8080/api/v1/patients').reply(200, data);

        _requestTypes2.default.get({
            partialUrl: "patients"
        }).then(function (response) {
            (0, _expect2.default)(response.data).toEqual({ response: true });
            done();
        });
    });

    it('test for get failure axios', function (done) {
        _requestTypes2.default.get({
            partialUrl: "patients/abcd"
        }).then(function (response) {
            (0, _expect2.default)(response.data).toEqual({ response: true });
            done();
        }).catch(function (error) {
            (0, _expect2.default)(error.response.status).toEqual(404);
            done();
        });
    });

    it('test for post success axios', function (done) {
        mock.onPost('http://localhost:8080/api/v1/patients', reqBody).reply(200, data);

        _requestTypes2.default.post({
            partialUrl: "patients",
            reqBody: reqBody
        }).then(function (response) {
            (0, _expect2.default)(response.data).toEqual({ response: true });
            done();
        });
    });

    it('test for post failure axios', function (done) {
        _requestTypes2.default.post({
            partialUrl: "patients/abcd",
            reqBody: reqBody
        }).then(function (response) {
            (0, _expect2.default)(response.data).toEqual({ response: true });
            done();
        }).catch(function (error) {
            (0, _expect2.default)(error.response.status).toEqual(404);
            done();
        });
    });

    it('should check return of receiveApiData request', function () {
        var receivePayload = { a: 2 };
        var expectedAction = {
            type: _actionTypes.RECEIVE_API_DATA_PDV_DATA,
            payload: receivePayload
        };
        (0, _expect2.default)(_requestTypes2.default.receiveApiData(receivePayload)).toEqual(expectedAction);
    });

    it('test for put success axios', function (done) {
        mock.onPut('http://localhost:8080/api/v1/patients/3', reqBody).reply(200, data);

        _requestTypes2.default.put({
            partialUrl: "patients",
            ids: "3",
            reqBody: reqBody
        }).then(function (response) {
            (0, _expect2.default)(response.data).toEqual({ response: true });
            done();
        });
    });

    it('test for put failure axios', function (done) {
        _requestTypes2.default.put({
            partialUrl: "patients/abcd",
            reqBody: reqBody
        }).then(function (response) {
            (0, _expect2.default)(response.data).toEqual({ response: true });
            done();
        }).catch(function (error) {
            (0, _expect2.default)(error.response.status).toEqual(404);
            done();
        });
    });
});