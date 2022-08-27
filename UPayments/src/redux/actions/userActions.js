import {
  API_MASTER_LIST,
  API_SEARCH_COMPLAINT,
  API_COMPLAINT_STATUS,
  API_CREATE_COMPLAINT
} from '../types';
export const apiProductList = () => ({
  types: API_MASTER_LIST,
  payload: {
      client: 'default',
      request: {
          url: `/api/products`,
          method: 'get',
      },
  },
});

export const apiSearchComplaint = params => ({
  types: API_SEARCH_COMPLAINT,
  payload: {
    client: 'default',
    request: {
      url: '/api/complaint/search',
      method: 'post',
      data: {
        ...params,
      },
    },
  },
});


export const apiCreateComplaint = params => ({
  types: API_CREATE_COMPLAINT,
  payload: {
    client: 'default',
    request: {
      url: '/api/complaint/add-complaint',
      method: 'post',
      data: {
        ...params,
      },
    },
  },
});


export const apiComplaintStatus = params => ({
  types: API_COMPLAINT_STATUS,
  payload: {
    client: 'default',
    request: {
      url: '/api/complaint/complaint-status',
      method: 'post',
      data: {
        ...params,
      },
    },
  },
});

