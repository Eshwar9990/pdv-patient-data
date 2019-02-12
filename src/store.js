import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from "redux-saga";

import patientDataReducer from 'pdv-patient-list/lib/reducers/patientDataReducer';
import apiPdvDataReducer from "./reducers/apiPdvDataReducer";
import notificationReducer from "pdv-container/lib/reducers/notificationReducer";
import apiSaga from "./sagas/apiSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({patientDataReducer, apiPdvDataReducer, notificationReducer}), 
    {}, 
    applyMiddleware(createLogger(), sagaMiddleware)
); 

sagaMiddleware.run(apiSaga);