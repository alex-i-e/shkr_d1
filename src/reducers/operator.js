import {OPERATOR_LIST_WAS_LOADED, OPERATOR_WAS_SELECTED} from '../constants/actionTypes';

const State = {
    operatorId: '',
    operatorList: [],
};

export default (state = State, action) => {
    switch (action.type) {
        case OPERATOR_WAS_SELECTED:
            return {
                ...state,
                operatorId: action.payload,
            };
        case OPERATOR_LIST_WAS_LOADED:
            return {
                ...state,
                operatorList: action.payload,
            };
        default:
            return state;
    }
};
