import { combineReducers } from 'redux';
import { musicReducer } from './reducers/musicReducer';
export const rootReducer = combineReducers({
    musicReducer,
});

export default rootReducer;