import {
  SET_DEMO_SESSION,
  SET_USER_SESSION,
  CLEAR_USER_SESSION,
  SAVEPASS,
  STORESIGNATURE,
} from '../types';

export const setDemoSession = () => ({
  type: SET_DEMO_SESSION,
});
export const setUserSession = () => ({
  type: SET_USER_SESSION,
});
export const clearUserSession = () => ({
  type: CLEAR_USER_SESSION,
});
export const savePass = params => ({
  type: SAVEPASS,
  payload: params,
});

export const storeSignature = params => ({
  type: STORESIGNATURE,
  payload: params,
});
