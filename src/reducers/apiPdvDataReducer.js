import { RECEIVE_API_DATA_PDV_DATA, CHANGE_SUBMIT_VALIDATION, DROP_DOWN_CHANGE, SET_UPDATE_DATA } from '../actionTypes/actionTypes';

const apiPdvDataReducer = (state = {
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
}, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case RECEIVE_API_DATA_PDV_DATA:
            console.log("Payload from RECEIVE_API_DATA_PDV_DATA: ", action.payload);
            state = {
                updateData: Object.assign({}, action.payload.data.mostLikelyOutcome),
                isSubmitValid: false,
                data: action.payload
            };
            state.updateData.name = "";
            state.updateData.id = undefined;
            break;
        case CHANGE_SUBMIT_VALIDATION:
            state = {
                ...state,
            };
            state.isSubmitValid = action.payload
            break;
        case DROP_DOWN_CHANGE:
            state = {
                ...state,
            };
            console.log("tr", state);
            state.updateData[action.payload.key] = action.payload.value;
            break;
        case SET_UPDATE_DATA:
            state = {
                ...state
            };
            state.updateData = action.payload;
            break;
    }
    return state;
};

export default apiPdvDataReducer;