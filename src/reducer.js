import operator from './reducers/operator';
import userActions from './reducers/userActions';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    operator,
    userActions,
    router: routerReducer,
});
