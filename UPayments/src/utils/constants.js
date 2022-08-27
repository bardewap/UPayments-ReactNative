import {Platform} from 'react-native';
import Moment from 'moment';

export default {
  cureentDate: Moment(new Date()).format('YYYY-MM-DD'),
  minDate: Moment(new Date().getFullYear() - 1).format('YYYY-MM-DD'),

  //live server
  baseUrl: 'https://upayments-studycase-api.herokuapp.com',

  appVersion: Platform.OS == 'ios' ? 'Version 3.0' : 'Version 3.0',



  isIos: Platform.OS == 'ios',
  reg: {
    regPass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,
    regUser:
      /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/,
    regName: /^[A-Za-z]+$/,
    regPan: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
    regEmail: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    regBankno: /^\d{12,16}$/,
    regIfsc: /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/,
    regNumber: /^[0-9]+$/,
    regPincode: /^([0-9]){6}$/,
    regMobile: /^([0-9]){12}$/,
    regPercentage: /^[1-9][0-9]?$|^100$/,
  },
};
