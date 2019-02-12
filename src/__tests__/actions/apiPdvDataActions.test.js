import expect from 'expect';
import apiPdvDataActions from '../../actions/apiPdvDataActions';
import { GET_REQUEST, RECEIVE_API_DATA_PDV_DATA, DROP_DOWN_CHANGE, SET_UPDATE_DATA, CHANGE_SUBMIT_VALIDATION, DELETE_REQUEST, GET_REQUEST_PL, POST_REQUEST, PUT_REQUEST } from '../../actionTypes/actionTypes';

describe('apiPdvDataActions', () => {
    it('should create an action to get request', () => {
        const getPayload = {
            ids: undefined,
            partialUrl: "patients"
        };
        const expectedAction = {
            type: GET_REQUEST,
            payload: getPayload
        };
        expect(apiPdvDataActions.get(getPayload.partialUrl, getPayload.ids)).toEqual(expectedAction)
    });

    it('should create an action to get request common', () => {
        const getPayload = {
            ids: undefined,
            partialUrl: "patients"
        };
        const expectedAction = {
            type: GET_REQUEST_PL,
            payload: getPayload
        };
        expect(apiPdvDataActions.getCommon(getPayload.partialUrl, getPayload.ids)).toEqual(expectedAction)
    });

    it('should create an action to put request', () => {
        const putPayload = {
            ids: 111,
            partialUrl: "patients",
            reqBody: {"name":"Balaswamy BS","addOnModifier":"","appointmentType":"Telephone","billingType":"","category":"Universal","contactType":"Tele-Medicine","ebp_ss1":"","intesityType":"","labType":"CBC","outsideFacility":"","personContacted":"Other","placeOfService":"Nursing Facility"}
        };
        const expectedAction = {
            type: PUT_REQUEST,
            payload: putPayload
        };
        expect(apiPdvDataActions.put(putPayload.partialUrl, putPayload.ids, putPayload.reqBody)).toEqual(expectedAction)
    });

    it('should create an action to delete request', () => {
        const deletePayload = {
            ids: 139,
            partialUrl: "patients"
        };
        const expectedAction = {
            type: DELETE_REQUEST,
            payload: deletePayload
        };
        expect(apiPdvDataActions.delete(deletePayload.partialUrl, deletePayload.ids)).toEqual(expectedAction)
    });

    it('should create an action to post request', () => {
        const postPayload = {
            partialUrl: "patients",
            reqBody: {"name":"Post first","personContacted":"Guardian","placeOfService":"Residential Program","contactType":"Indirect","appointmentType":"","billingType":"","intesityType":"","addOnModifier":"","labType":"CBC","outsideFacility":"","ebp_ss1":"","category":""}
        };
        const expectedAction = {
            type: POST_REQUEST,
            payload: postPayload
        };
        expect(apiPdvDataActions.post(postPayload.partialUrl, postPayload.reqBody)).toEqual(expectedAction);
    });

    it('should create an action to CHANGE_SUBMIT_VALIDATION', () => {
        const submitValidationPayload = "sample";
        const expectedAction = {
            type: CHANGE_SUBMIT_VALIDATION,
            payload: submitValidationPayload
        };
        expect(apiPdvDataActions.changeSubmitValidation(submitValidationPayload)).toEqual(expectedAction);
    });

    it('should create an action to DROP_DOWN_CHANGE', () => {
        const dropDownChangePayload = {
            key: "sampleKey",
            value: "sampleValue"
        };
        const expectedAction = {
            type: DROP_DOWN_CHANGE,
            payload: dropDownChangePayload
        };
        expect(apiPdvDataActions.dropDownUpdate(dropDownChangePayload.key, dropDownChangePayload.value)).toEqual(expectedAction);
    });

    it('should create an action to SET_UPDATE_DATA', () => {
        const setUpdatePayload = {
            a: 1
        };
        const expectedAction = {
            type: SET_UPDATE_DATA,
            payload: setUpdatePayload
        };
        expect(apiPdvDataActions.setUpdateData(setUpdatePayload)).toEqual(expectedAction);
    });
});