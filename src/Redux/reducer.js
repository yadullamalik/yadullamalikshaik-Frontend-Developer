import { CHANGE_OFFSET, GET_DATA, GET_LAUNCH_YEAR, GET_STATUS } from "./action";

const init = {
  data: [],
  offset: 1,
};

export const reducer = (store = init, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...store,
        data: action.payload,
      };
    case GET_STATUS:
      return {
        ...store,
        data: action.payload,
      };
    case GET_LAUNCH_YEAR:
      return {
        ...store,
        data: action.payload,
      };
    case CHANGE_OFFSET:
      return {
        ...store,
        offset: action.payload,
      };
    default:
      return store;
  }
};
