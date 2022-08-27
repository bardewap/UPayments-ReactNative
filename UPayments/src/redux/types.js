export const createTypes = (namespace, type) => [
  `${namespace}/${type}_REQUEST`,
  `${namespace}/${type}_SUCCESS`,
  `${namespace}/${type}_FAIL`,
];



const commonActionNameSpaceAPI_MASTER_LIST = 'commonActionNameSpaceAPI_MASTER_LIST';
const commonActionNameSpaceAPI_PRODUCT_DETAIL = 'commonActionNameSpaceAPI_PRODUCT_DETAIL';



export const API_MASTER_LIST = createTypes(commonActionNameSpaceAPI_MASTER_LIST, "API_MASTER_LIST");
export const API_PRODUCT_DETAIL = createTypes(commonActionNameSpaceAPI_PRODUCT_DETAIL, "API_PRODUCT_DETAIL");



