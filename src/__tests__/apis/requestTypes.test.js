import expect from 'expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import requestTypes from "../../apis/requestTypes";
import { RECEIVE_API_DATA_PDV_DATA } from '../../actionTypes/actionTypes';

describe('requestTypes', () => {
	var mock = new MockAdapter(axios);
    const data = { response: true };
    const reqBody = {"name":"Savitha","personContacted":"Patient with Guardian","placeOfService":"State Supported Living Center","contactType":"Correspondence","appointmentType":"Cancelled by Provider","billingType":"Expanded Problem-Focused","intesityType":"Moderate","addOnModifier":"Enrichment Service","labType":"Urine Drug Screen","outsideFacility":"Outside Facility C","ebp_ss1":"Assertive Community Treatment","category":"Indicated"};

    it('test for get success axios', done => {
        mock.onGet('http://localhost:8080/api/v1/patients').reply(200, data);

        requestTypes.get({
            partialUrl: "patients"
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        });
	});

	it('test for get failure axios', done => {
        requestTypes.get({
            partialUrl: "patients/abcd"
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        }).catch(error => {
			expect(error.response.status).toEqual(404);
			done();
		});
	});
	
	it('test for post success axios', done => {
        mock.onPost('http://localhost:8080/api/v1/patients', reqBody).reply(200, data);

        requestTypes.post({
            partialUrl: "patients",
            reqBody: reqBody
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        });
	});

	it('test for post failure axios', done => {
        requestTypes.post({
            partialUrl: "patients/abcd",
            reqBody: reqBody
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        }).catch(error => {
			expect(error.response.status).toEqual(404);
			done();
		});
	});
	
	it('should check return of receiveApiData request', () => {
        const receivePayload = { a: 2 };
        const expectedAction = {
            type: RECEIVE_API_DATA_PDV_DATA,
            payload: receivePayload
        };
        expect(requestTypes.receiveApiData(receivePayload)).toEqual(expectedAction);
    });

    it('test for put success axios', done => {
        mock.onPut('http://localhost:8080/api/v1/patients/3', reqBody).reply(200, data);

        requestTypes.put({
            partialUrl: "patients",
            ids: "3",
            reqBody: reqBody
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        });
	});

	it('test for put failure axios', done => {
        requestTypes.put({
            partialUrl: "patients/abcd",
            reqBody: reqBody
        }).then(response => {
            expect(response.data).toEqual({response: true});
            done();
        }).catch(error => {
			expect(error.response.status).toEqual(404);
			done();
		});
	});
});