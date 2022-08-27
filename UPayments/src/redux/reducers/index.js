import {combineReducers} from 'redux';
import common from './common';
import userSession from './userSession';

export const persistWhitelist = ['common', 'userSession'];

export default combineReducers({
  common,
  userSession,
});
