import expect from 'expect';

import apiPdvDataReducer from '../../reducers/apiPdvDataReducer';
import { RECEIVE_API_DATA_PDV_DATA, CHANGE_SUBMIT_VALIDATION, DROP_DOWN_CHANGE, SET_UPDATE_DATA } from '../../actionTypes/actionTypes';

describe('apiPdvDataReducer', () => {
    it('check for RECEIVE_API_DATA_PDV_DATA', () => {
        const receiveApiAction = {
            type: RECEIVE_API_DATA_PDV_DATA,
            payload: {
                1: "a",
                data: {
                    mostLikelyOutcome: "b"                    
                }
            }
        };
        const expectedValue = {
            "updateData": {"0": "b", "id": undefined, "name": ""},
            isSubmitValid: false,
            data: {
                1: "a",
                data: {
                    mostLikelyOutcome: "b"                    
                }
            }
        };
        expect(apiPdvDataReducer(null, receiveApiAction)).toEqual(expectedValue)
    });

    it('check for CHANGE_SUBMIT_VALIDATION', () => {
        const submitValidationAction = {
            type: CHANGE_SUBMIT_VALIDATION,
            payload: true
        };
        const expectedValue = {
            isSubmitValid: true
        };
        expect(apiPdvDataReducer(null, submitValidationAction)).toEqual(expectedValue)
    });

    it('check for DROP_DOWN_CHANGE', () => {
        const submitValidationAction = {
            type: DROP_DOWN_CHANGE,
            payload: {
                key: "personContacted",
                value: "sampleValue"
            }
        };
        const expectedValue = {"isSubmitValid": false, "updateData": {"addOnModifier": "", "appointmentType": "", "billingType": "", "category": "", "contactType": "", "ebp_ss1": "",
        "id": undefined, "intesityType": "", "labType": "", "name": "", "outsideFacility": "", "personContacted": "sampleValue", "placeOfService": ""}};
        expect(apiPdvDataReducer({
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
        },submitValidationAction)).toEqual(expectedValue)
    });

    it('check for SET_UPDATE_DATA', () => {
        const setUpdateAction = {
            type: SET_UPDATE_DATA,
            payload: true
        };
        const expectedValue = {
            updateData: true
        };
        expect(apiPdvDataReducer(null, setUpdateAction)).toEqual(expectedValue)
    });
});