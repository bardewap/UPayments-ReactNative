import {
  API_MASTER_LIST,
  API_PRODUCT_DETAIL
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


