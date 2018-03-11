import {RECIEVE_VALIDATE_STATE, REQUEST_WAS_SENT} from '../constants/actionTypes';

const State = {
    isRequestSent: false,
    validateResponse: {
        message: '',
        validate: false,
    },
};

export default (state = State, action) => {
    switch (action.type) {
        case REQUEST_WAS_SENT:
            return {
                ...state,
                isRequestSent: action.payload,
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
