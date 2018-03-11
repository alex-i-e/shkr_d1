import {CHECK_PHONE_VALID, CHECK_SUM_VALID, RECIEVE_VALIDATE_STATE, REQUEST_WAS_SENT} from '../constants/actionTypes';

const State = {
    isValidForm: null,
    isPhoneValid: null,
    isSumValid: null,
    validateResponse: {
        message: '',
        validate: false,
    },
};

export default (state = State, action) => {
    switch (action.type) {
        case CHECK_PHONE_VALID:
            return {
                ...state,
                isPhoneValid: action.payload,
                isValidForm: state.isSumValid && action.payload,
            };
        case CHECK_SUM_VALID:
            return {
                ...state,
                isSumValid: action.payload,
                isValidForm: state.isPhoneValid && action.payload,
            };
        case REQUEST_WAS_SENT:
            return {
                ...state,
                isValidForm: action.payload,
            };
        case RECIEVE_VALIDATE_STATE:
            return {
                ...state,
                validateResponse: action.payload,
            };
        default:
            return state;
    }
};
