import expect from 'expect' // You can use any testing library
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { cloneableGenerator } from 'redux-saga/utils';

import apiSaga, { getData, deleteData, getPLData, postData, putData } from "../../sagas/apiSaga";
import requestTypes from "../../apis/requestTypes";
import { GET_REQUEST, RECEIVE_API_DATA_PDV_DATA, GET_REQUEST_PL, POST_REQUEST, PUT_REQUEST } from '../../actionTypes/actionTypes';

const reqBody = {"name":"Savitha","personContacted":"Patient with Guardian","placeOfService":"State Supported Living Center","contactType":"Correspondence","appointmentType":"Cancelled by Provider","billingType":"Expanded Problem-Focused","intesityType":"Moderate","addOnModifier":"Enrichment Service","labType":"Urine Drug Screen","outsideFacility":"Outside Facility C","ebp_ss1":"Assertive Community Treatment","category":"Indicated"};

describe('apiSaga', () => {
    it("should call get apiSaga", () => {
        const generator = apiSaga();

        const result = generator.next({});
        expect(result.value.FORK.args).toEqual([GET_REQUEST, getData]);
    });
});

describe('getData from apiSaga', () => {
    it('Success case', () => {
        const action = {
            type: GET_REQUEST,
            payload: "patients"
        };
        const testLoad = getData(action);
        testLoad.next(requestTypes.get);
        const result = testLoad.next({a: 1});
        expect(result.value.PUT.action).toEqual({ type: RECEIVE_API_DATA_PDV_DATA, payload: { a: 1 } });
    });
  
    it('Failure case', () => {
        const action = {
            type: GET_REQUEST,
            payload: "pati"
        };
        const testLoad = getData(action);
        testLoad.next(requestTypes.get);
        const result = testLoad.next();
        expect(result.value.PUT.action.payload).toEqual(undefined);
    });
});

describe('getData PL from apiSaga', () => {
    it('Success case', () => {
        const action = {
            type: GET_REQUEST_PL,
            payload: "patients"
        };
        const testLoad = getPLData(action);
        testLoad.next(requestTypes.get);
        const result = testLoad.next({a: 1});
        expect(result.value.PUT.action).toEqual({ type: RECEIVE_API_DATA_PDV_DATA, payload: { a: 1 } });
    });
  
    it('Failure case', () => {
        const action = {
            type: GET_REQUEST_PL,
            payload: "pati"
        };
        const testLoad = getPLData(action);
        testLoad.next(requestTypes.get);
        const result = testLoad.next();
        expect(result.value.PUT.action.payload).toEqual(undefined);
    });
});

describe('post from apiSaga', () => {
    it('Success case', () => {
        const action = {
            type: POST_REQUEST,
            payload: {
                partialUrl: "patients",
                reqBody: reqBody
            }
        };
        const testLoad = postData(action);
        testLoad.next(requestTypes.post);
        const result = testLoad.next({a: 1});
        expect(result.value.PUT.action).toEqual({ type: RECEIVE_API_DATA_PDV_DATA, payload: { a: 1 } });
    });
  
    it('Failure case', () => {
        const action = {
            type: POST_REQUEST,
            payload: "pati"
        };
        const testLoad = postData(action);
        testLoad.next(requestTypes.post);
        const result = testLoad.next();
        expect(result.value.PUT.action.payload).toEqual(undefined);
    });
});

describe('put from apiSaga', () => {
    it('Success case', () => {
        const action = {
            type: PUT_REQUEST,
            payload: {
                partialUrl: "patients",
                reqBody: reqBody,
                ids: "2"
            }
        };
        const testLoad = putData(action);
        testLoad.next(requestTypes.put);
        const result = testLoad.next({a: 1});
        expect(result.value.PUT.action).toEqual({ type: RECEIVE_API_DATA_PDV_DATA, payload: { a: 1 } });
    });
  
    it('Failure case', () => {
        const action = {
            type: PUT_REQUEST,
            payload: "pati"
        };
        const testLoad = putData(action);
        testLoad.next(requestTypes.put);
        const result = testLoad.next();
        expect(result.value.PUT.action.payload).toEqual(undefined);
    });
});