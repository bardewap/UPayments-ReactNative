export const createTypes = (namespace, type) => [
  `${namespace}/${type}_REQUEST`,
  `${namespace}/${type}_SUCCESS`,
  `${namespace}/${type}_FAIL`,
];



const commonActionNameSpaceAPI_MASTER_LIST = 'commonActionNameSpaceAPI_MASTER_LIST';
const commonActionNameSpaceAPI_SEARCH_COMPLAINT = 'commonActionNameSpaceAPI_SEARCH_COMPLAINT';
const commonActionNameSpaceAPI_COMPLAINT_STATUS = 'commonActionNameSpaceAPI_COMPLAINT_STATUS';
const commonActionNameSpaceAPI_CREATE_COMPLAINT = 'commonActionNameSpaceAPI_CREATE_COMPLAINT';



export const API_MASTER_LIST = createTypes(commonActionNameSpaceAPI_MASTER_LIST, "API_MASTER_LIST");
export const API_SEARCH_COMPLAINT = createTypes(commonActionNameSpaceAPI_SEARCH_COMPLAINT, "API_SEARCH_COMPLAINT");
export const API_COMPLAINT_STATUS = createTypes(commonActionNameSpaceAPI_COMPLAINT_STATUS, "API_COMPLAINT_STATUS");
export const API_CREATE_COMPLAINT = createTypes(commonActionNameSpaceAPI_CREATE_COMPLAINT, "API_CREATE_COMPLAINT");



