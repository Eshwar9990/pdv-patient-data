import { call, put, takeLatest } from "redux-saga/effects";

import apiPdvDataActions from "../actions/apiPdvDataActions";
import requestTypes from "../apis/requestTypes";
import { GET_REQUEST, GET_REQUEST_PL, POST_REQUEST, PUT_REQUEST } from '../actionTypes/actionTypes';

export function* getData(action) {
	const data = yield call(requestTypes.get, action.payload);
	yield put(apiPdvDataActions.receiveApiData(data));
}

export function* getPLData(action) {
	const data = yield call(requestTypes.get, action.payload);
	yield put(apiPdvDataActions.receiveApiData(data));
}

export function* postData(action) {
	console.log('Action in apiSaga: ', action);
	const data = yield call(requestTypes.post, action.payload);
	yield put(apiPdvDataActions.receiveApiData(data));
}

export function* putData(action) {
	console.log('Action in apiSaga: ', action);	
	const data = yield call(requestTypes.put, action.payload);
	yield put(apiPdvDataActions.receiveApiData(data));
}

export default function* apiSaga() {
	yield takeLatest(GET_REQUEST, getData);
	yield takeLatest(GET_REQUEST_PL, getPLData);
	yield takeLatest(POST_REQUEST, postData);
	yield takeLatest(PUT_REQUEST, putData);
}