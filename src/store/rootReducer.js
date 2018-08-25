import { combineReducers } from 'redux';
import { reducer as buckets } from './modules/buckets';

const rootReducer = combineReducers({ buckets });

export default rootReducer;
