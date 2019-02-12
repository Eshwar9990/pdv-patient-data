import { GET_REQUEST, RECEIVE_API_DATA_PDV_DATA, DROP_DOWN_CHANGE, SET_UPDATE_DATA, CHANGE_SUBMIT_VALIDATION, DELETE_REQUEST, GET_REQUEST_PL, POST_REQUEST, PUT_REQUEST } from '../actionTypes/actionTypes';

const apiPdvDataActions = {
    get: function(partialUrl, ids) {
        return {
            type: GET_REQUEST,
            payload: {
                partialUrl, ids
            }
        }
    },
    getCommon: function(partialUrl, ids) {
        return {
            type: GET_REQUEST_PL,
            payload: {
                partialUrl, ids
            }
        }
    },
    put: function(partialUrl, ids, reqBody) {
        return {
            type: PUT_REQUEST,
            payload: {
                partialUrl, ids, reqBody
            }
        }
    },
    delete: function(partialUrl, ids) {
        return {
            type: DELETE_REQUEST,
            payload: {
                partialUrl, ids
            }
        }
    },
    post: function(partialUrl, reqBody) {
        return {
            type: POST_REQUEST,
            payload: {
                partialUrl, reqBody
            }
        }
    },
    receiveApiData: function(data) {
        return {
            type: RECEIVE_API_DATA_PDV_DATA,
            payload: data
        }
    },
    changeSubmitValidation: function(value) {
        return {
            type: CHANGE_SUBMIT_VALIDATION,
            payload: value
        }
    },
    dropDownUpdate: function(key, value) {
        return {
            type: DROP_DOWN_CHANGE,
            payload: {
                key, value
            }
        }
    },
    setUpdateData: function(updateData) {
        return {
            type: SET_UPDATE_DATA,
            payload: updateData
        }
    }
};

export default apiPdvDataActions;