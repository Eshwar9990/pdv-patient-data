'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _apiPdvDataReducer = require('../../reducers/apiPdvDataReducer');

var _apiPdvDataReducer2 = _interopRequireDefault(_apiPdvDataReducer);

var _actionTypes = require('../../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('apiPdvDataReducer', function () {
    it('check for RECEIVE_API_DATA_PDV_DATA', function () {
        var receiveApiAction = {
            type: _actionTypes.RECEIVE_API_DATA_PDV_DATA,
            payload: {
                1: "a",
                data: {
                    mostLikelyOutcome: "b"
                }
            }
        };
        var expectedValue = {
            "updateData": { "0": "b", "id": undefined, "name": "" },
            isSubmitValid: false,
            data: {
                1: "a",
                data: {
                    mostLikelyOutcome: "b"
                }
            }
        };
        (0, _expect2.default)((0, _apiPdvDataReducer2.default)(null, receiveApiAction)).toEqual(expectedValue);
    });

    it('check for CHANGE_SUBMIT_VALIDATION', function () {
        var submitValidationAction = {
            type: _actionTypes.CHANGE_SUBMIT_VALIDATION,
            payload: true
        };
        var expectedValue = {
            isSubmitValid: true
        };
        (0, _expect2.default)((0, _apiPdvDataReducer2.default)(null, submitValidationAction)).toEqual(expectedValue);
    });

    it('check for DROP_DOWN_CHANGE', function () {
        var submitValidationAction = {
            type: _actionTypes.DROP_DOWN_CHANGE,
            payload: {
                key: "personContacted",
                value: "sampleValue"
            }
        };
        var expectedValue = { "isSubmitValid": false, "updateData": { "addOnModifier": "", "appointmentType": "", "billingType": "", "category": "", "contactType": "", "ebp_ss1": "",
                "id": undefined, "intesityType": "", "labType": "", "name": "", "outsideFacility": "", "personContacted": "sampleValue", "placeOfService": "" } };
        (0, _expect2.default)((0, _apiPdvDataReducer2.default)({
            updateData: {
                "id": undefined,
                "name": "",
                "personContacted": "",
                "placeOfService": "",
                "contactType": "",
                "appointmentType": "",
                "billingType": "",
                "intesityType": "",
                "addOnModifier": "",
                "labType": "",
                "outsideFacility": "",
                "ebp_ss1": "",
                "category": ""
            },
            isSubmitValid: false
        }, submitValidationAction)).toEqual(expectedValue);
    });

    it('check for SET_UPDATE_DATA', function () {
        var setUpdateAction = {
            type: _actionTypes.SET_UPDATE_DATA,
            payload: true
        };
        var expectedValue = {
            updateData: true
        };
        (0, _expect2.default)((0, _apiPdvDataReducer2.default)(null, setUpdateAction)).toEqual(expectedValue);
    });
});