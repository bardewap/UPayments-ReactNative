import {
  API_MASTER_LIST,
  API_PRODUCT_DETAIL,
  API_CATEGORY_LIST,
  API_PRODUCT_LIST_POST
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




export const apiProductPost = (params) => ({
  types: API_PRODUCT_LIST_POST,
  payload: {
      client: 'default',
      request: {
        url: `/api/products`,
        method: 'post',
          data: {
              ...params,
          }
      },
  },
});


export const apiProductDetail = (productId) => ({
  types: API_PRODUCT_DETAIL,
  payload: {
      client: 'default',
      request: {
          url: `/api/products/${productId}`,
          method: 'get',
      },
  },
});

export const apigetCategoryList = () => ({
  types: API_CATEGORY_LIST,
  payload: {
      client: 'default',
      request: {
          url: `api/categories`,
          method: 'get',
      },
  },
});


