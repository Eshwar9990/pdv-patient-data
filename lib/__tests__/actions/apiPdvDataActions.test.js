'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _apiPdvDataActions = require('../../actions/apiPdvDataActions');

var _apiPdvDataActions2 = _interopRequireDefault(_apiPdvDataActions);

var _actionTypes = require('../../actionTypes/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('apiPdvDataActions', function () {
    it('should create an action to get request', function () {
        var getPayload = {
            ids: undefined,
            partialUrl: "patients"
        };
        var expectedAction = {
            type: _actionTypes.GET_REQUEST,
            payload: getPayload
        };
        (0, _expect2.default)(_apiPdvDataActions2.default.get(getPayload.partialUrl, getPayload.ids)).toEqual(expectedAction);
    });

    it('should create an action to get request common', function () {
        var getPayload = {
            ids: undefined,
            partialUrl: "patients"
        };
        var expectedAction = {
            type: _actionTypes.GET_REQUEST_PL,
            payload: getPayload
        };
        (0, _expect2.default)(_apiPdvDataActions2.default.getCommon(getPayload.partialUrl, getPayload.ids)).toEqual(expectedAction);
    });

    it('should create an action to put request', function () {
        var putPayload = {
            ids: 111,
            partialUrl: "patients",
            reqBody: { "name": "Balaswamy BS", "addOnModifier": "", "appointmentType": "Telephone", "billingType": "", "category": "Universal", "contactType": "Tele-Medicine", "ebp_ss1": "", "intesityType": "", "labType": "CBC", "outsideFacility": "", "personContacted": "Other", "placeOfService": "Nursing Facility" }
        };
        var expectedAction = {
            type: _actionTypes.PUT_REQUEST,
            payload: putPayload
        };
        (0, _expect2.default)(_apiPdvDataActions2.default.put(putPayload.partialUrl, putPayload.ids, putPayload.reqBody)).toEqual(expectedAction);
    });

    it('should create an action to delete request', function () {
        var deletePayload = {
            ids: 139,
            partialUrl: "patients"
        };
        var expectedAction = {
            type: _actionTypes.DELETE_REQUEST,
            payload: deletePayload
        };
        (0, _expect2.default)(_apiPdvDataActions2.default.delete(deletePayload.partialUrl, deletePayload.ids)).toEqual(expectedAction);
    });

    it('should create an action to post request', function () {
        var postPayload = {
            partialUrl: "patients",
            reqBody: { "name": "Post first", "personContacted": "Guardian", "placeOfService": "Residential Program", "contactType": "Indirect", "appointmentType": "", "billingType": "", "intesityType": "", "addOnModifier": "", "labType": "CBC", "outsideFacility": "", "ebp_ss1": "", "category": "" }
        };
        var expectedAction = {
            type: _actionTypes.POST_REQUEST,
            payload: postPayload
        };
        (0, _expect2.default)(_apiPdvDataActions2.default.post(postPayload.partialUrl, postPayload.reqBody)).toEqual(expectedAction);
    });

    it('should create an action to CHANGE_SUBMIT_VALIDATION', function () {
        var submitValidationPayload = "sample";
        var expectedAction = {
            type: _actionTypes.CHANGE_SUBMIT_VALIDATION,
            payload: submitValidationPayload
        };
        (0, _expect2.default)(_apiPdvDataActions2.default.changeSubmitValidation(submitValidationPayload)).toEqual(expectedAction);
    });

    it('should create an action to DROP_DOWN_CHANGE', function () {
        var dropDownChangePayload = {
            key: "sampleKey",
            value: "sampleValue"
        };
        var expectedAction = {
            type: _actionTypes.DROP_DOWN_CHANGE,
            payload: dropDownChangePayload
        };
        (0, _expect2.default)(_apiPdvDataActions2.default.dropDownUpdate(dropDownChangePayload.key, dropDownChangePayload.value)).toEqual(expectedAction);
    });

    it('should create an action to SET_UPDATE_DATA', function () {
        var setUpdatePayload = {
            a: 1
        };
        var expectedAction = {
            type: _actionTypes.SET_UPDATE_DATA,
            payload: setUpdatePayload
        };
        (0, _expect2.default)(_apiPdvDataActions2.default.setUpdateData(setUpdatePayload)).toEqual(expectedAction);
    });
});