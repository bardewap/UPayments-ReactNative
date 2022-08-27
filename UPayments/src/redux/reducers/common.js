import {
  SET_DEMO_SESSION,
  SET_USER_SESSION,
  CLEAR_USER_SESSION,
  SAVEPASS,
  SAVEFORM0,
  SAVEFORM1,
  SAVEFORM2,
  SAVEFORM3,
  SAVEFORM4,
  SAVEFORM5,
  SAVEFORM6,
  SAVEFORM7,
  SAVEFORM8,
  SAVEFORM9,
  SAVEFORM10,
  SAVEFORM11,
  SAVEFORM12,
  STORESIGNATURE,
} from '../types';

const initialData = {
  isLoading: false,
  data: null,
  isUserLoggedin: false,
  isUserShowDemo: true,
  user_email: '',
  user_password: '',
  form1: {},
};

export default (state = initialData, action) => {
  switch (action.type) {
    case SET_DEMO_SESSION:
      return {
        ...state,
        isUserShowDemo: false,
      };
    case SET_USER_SESSION:
      return {
        ...state,
        isUserLoggedin: true,
      };

    case CLEAR_USER_SESSION:
      return {
        ...state,
        isUserLoggedin: false,
      };

    case SAVEPASS:
      return {
        ...state,
        user_email: action?.payload.user_email,
        user_password: action?.payload.user_password,
      };

    case SAVEFORM0:
      return {
        ...state,
        form0: action?.payload.form0,
      };
    case SAVEFORM1:
      return {
        ...state,
        form1: action?.payload.form1,
      };
    case SAVEFORM2:
      return {
        ...state,
        form2: action?.payload.form2,
      };

    case SAVEFORM3:
      return {
        ...state,
        form3: action?.payload.form3,
      };
    case SAVEFORM4:
      return {
        ...state,
        form4: action?.payload.form4,
      };
    case SAVEFORM5:
      return {
        ...state,
        form5: action?.payload.form5,
      };
    case SAVEFORM6:
      return {
        ...state,
        form6: action?.payload.form6,
      };
    case SAVEFORM7:
      return {
        ...state,
        form7: action?.payload.form7,
      };
    case SAVEFORM8:
      return {
        ...state,
        form8: action?.payload.form8,
      };
    case SAVEFORM9:
      return {
        ...state,
        form9: action?.payload.form9,
      };
    case SAVEFORM10:
      return {
        ...state,
        form10: action?.payload.form10,
      };
    case SAVEFORM11:
      return {
        ...state,
        form11: action?.payload.form11,
      };
    case SAVEFORM12:
      return {
        ...state,
        form12: action?.payload.form12,
      };
    case STORESIGNATURE:
      return {
        ...state,
        sigatureData: action?.payload.sigatureData,
      };

    default:
      return state;
  }
};
