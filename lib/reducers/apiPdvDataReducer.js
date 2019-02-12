"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require("../actionTypes/actionTypes");

var apiPdvDataReducer = function apiPdvDataReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
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
    };
    var action = arguments[1];

    // eslint-disable-next-line default-case
    switch (action.type) {
        case _actionTypes.RECEIVE_API_DATA_PDV_DATA:
            console.log("Payload from RECEIVE_API_DATA_PDV_DATA: ", action.payload);
            state = {
                updateData: Object.assign({}, action.payload.data.mostLikelyOutcome),
                isSubmitValid: false,
                data: action.payload
            };
            state.updateData.name = "";
            state.updateData.id = undefined;
            break;
        case _actionTypes.CHANGE_SUBMIT_VALIDATION:
            state = _extends({}, state);
            state.isSubmitValid = action.payload;
            break;
        case _actionTypes.DROP_DOWN_CHANGE:
            state = _extends({}, state);
            console.log("tr", state);
            state.updateData[action.payload.key] = action.payload.value;
            break;
        case _actionTypes.SET_UPDATE_DATA:
            state = _extends({}, state);
            state.updateData = action.payload;
            break;
    }
    return state;
};

exports.default = apiPdvDataReducer;