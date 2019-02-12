"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var apiPdvDataActions = {
    get: function get(partialUrl, ids) {
        return {
            type: "GET_REQUEST",
            payload: {
                partialUrl: partialUrl, ids: ids
            }
        };
    },
    put: function put(partialUrl, ids, reqBody) {
        return {
            type: "PUT_REQUEST",
            payload: {
                partialUrl: partialUrl, ids: ids, reqBody: reqBody
            }
        };
    },
    delete: function _delete(partialUrl, ids) {
        return {
            type: "DELETE_REQUEST",
            payload: {
                partialUrl: partialUrl, ids: ids
            }
        };
    },
    post: function post(partialUrl, reqBody) {
        return {
            type: "POST_REQUEST",
            payload: {
                partialUrl: partialUrl, reqBody: reqBody
            }
        };
    },
    receiveApiData: function receiveApiData(data) {
        return {
            type: "RECEIVE_API_DATA",
            payload: data
        };
    },
    changeSubmitValidation: function changeSubmitValidation(value) {
        return {
            type: "CHANGE_SUBMIT_VALIDATION",
            payload: value
        };
    },
    dropDownUpdate: function dropDownUpdate(key, value) {
        return {
            type: "DROP_DOWN_CHANGE",
            payload: {
                key: key, value: value
            }
        };
    }
};

exports.default = apiPdvDataActions;