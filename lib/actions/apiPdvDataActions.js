'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require('../actionTypes/actionTypes');

var apiPdvDataActions = {
    get: function get(partialUrl, ids) {
        return {
            type: _actionTypes.GET_REQUEST,
            payload: {
                partialUrl: partialUrl, ids: ids
            }
        };
    },
    getCommon: function getCommon(partialUrl, ids) {
        return {
            type: _actionTypes.GET_REQUEST_PL,
            payload: {
                partialUrl: partialUrl, ids: ids
            }
        };
    },
    put: function put(partialUrl, ids, reqBody) {
        return {
            type: _actionTypes.PUT_REQUEST,
            payload: {
                partialUrl: partialUrl, ids: ids, reqBody: reqBody
            }
        };
    },
    delete: function _delete(partialUrl, ids) {
        return {
            type: _actionTypes.DELETE_REQUEST,
            payload: {
                partialUrl: partialUrl, ids: ids
            }
        };
    },
    post: function post(partialUrl, reqBody) {
        return {
            type: _actionTypes.POST_REQUEST,
            payload: {
                partialUrl: partialUrl, reqBody: reqBody
            }
        };
    },
    receiveApiData: function receiveApiData(data) {
        return {
            type: _actionTypes.RECEIVE_API_DATA_PDV_DATA,
            payload: data
        };
    },
    changeSubmitValidation: function changeSubmitValidation(value) {
        return {
            type: _actionTypes.CHANGE_SUBMIT_VALIDATION,
            payload: value
        };
    },
    dropDownUpdate: function dropDownUpdate(key, value) {
        return {
            type: _actionTypes.DROP_DOWN_CHANGE,
            payload: {
                key: key, value: value
            }
        };
    },
    setUpdateData: function setUpdateData(updateData) {
        return {
            type: _actionTypes.SET_UPDATE_DATA,
            payload: updateData
        };
    }
};

exports.default = apiPdvDataActions;