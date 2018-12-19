import {combineReducers} from 'redux';
import userReducer from './userReducer';
import tweetsReducer from './tweetsReducer';

const reducers = combineReducers({user: userReducer, tweets: tweetsReducer});

export default reducers;
