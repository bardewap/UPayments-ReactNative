import {API_MASTER_LIST} from '../types';

const initialData = {
  masterlist: []

};

export default (state = initialData, action) => {
  switch (action.type) {
      case API_MASTER_LIST[0]:
      return {
        ...state,
      };
    case API_MASTER_LIST[1]: {
      return {
        ...state,
        masterlist: action?.payload?.data
          ? action?.payload?.data
          : null,
          
      };
    }
    case API_MASTER_LIST[2]:
      return {
        ...state,
      };

    default:
      return state;
  }
};
