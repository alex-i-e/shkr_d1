import {POPUP_WAS_CLOSED, POPUP_WAS_OPENED} from '../constants/actionTypes';

const State = {
    popupOpen: false,
    popupTitle: '',
    popupClose: null,
};

export default (state = State, action) => {
    switch (action.type) {
        case POPUP_WAS_OPENED:
            return {
                ...state,
                popupOpen: action.popupOpen,
                popupTitle: action.popupTitle,
                popupClose: action.popupClose,
            };
        case POPUP_WAS_CLOSED:
            return {
                ...state,
                popupOpen: false,
                popupTitle: '',
                popupClose: null,
            };
        default:
            return state;
    }
};
