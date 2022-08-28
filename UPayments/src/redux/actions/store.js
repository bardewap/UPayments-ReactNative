import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {multiClientMiddleware} from 'redux-axios-middleware';
import axios from 'axios';
import reducers, {persistWhitelist} from '../reducers';
import {constants} from '../../utils/theme';
var middleware = [];
axios.defaults.timeout = 1000 * 60;

const defaultClient = axios.create({
  baseURL: constants.baseUrl,
  responseType: 'json',
});

defaultClient.interceptors.request.use(config => {
  // This block will be used in case any session need to maintain
  const { user_data} = store.getState().userSession;
  console.log('=========  Token ' + JSON.stringify(token));

  console.log('=========  Data ' + JSON.stringify(user_data));
 var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYWRlZXAuYmFyZGV3YUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYmFyZGV3YXAiLCJpYXQiOjE2NjE2OTExNjksImV4cCI6MTY2MjEyMzE2OX0.5fhiporHkKlZFK-gLbDfd7QXELVPKDr61orz_OgKmeU"
  if (token) {
    Object.assign(config, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return config;
});

const clients = {
  default: {
    client: defaultClient,
  },
};

const axiosMiddleware = multiClientMiddleware(clients, {
  returnRejectedPromiseOnError: true,
  interceptors: {
    response: [
      {
        error: ({dispatch}, error) => {
          if (error.response && error.response.status === 401) {
            //Error while api call
          }
          return Promise.reject(error);
        },
      },
    ],
  },
});

middleware.push(thunk);
middleware.push(axiosMiddleware);

if (__DEV__) {
  const {createLogger} = require('redux-logger');
  const loggerConfig = {
    collapsed: (getState, action, logEntry) => !logEntry.error,
    duration: true,
    diff: true,
  };
  const loggerMiddleware = createLogger(loggerConfig);
  middleware.push(loggerMiddleware);
}

const persistConfig = {
  version: 0,
  key: 'root',
  storage: AsyncStorage,
  whitelist: persistWhitelist,
  timeout: 1000,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  __DEV__
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
