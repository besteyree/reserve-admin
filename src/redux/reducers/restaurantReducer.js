import { ActionTypes } from "../contants/action-types";

const initialState = {
  restaurants: [],
  restaurantsdetails: [],
  listtabletype: [],
  listtable: [],
  listsms: [],
};

export const restaurantReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_RESTAURANTS:
      return { ...state, restaurants: payload };

    case ActionTypes.GET_RESTAURANT_DETAILS:
      return { ...state, restaurantsdetails: payload };

    case ActionTypes.LIST_TABLE_TYPE:
      return { ...state, listtabletype: payload };

    case ActionTypes.LIST_TABLE:
      return { ...state, listtable: payload };

    case ActionTypes.LIST_SMS:
      return { ...state, listsms: payload };

    // case ActionTypes.REMOVE:
    //   return {};
    default:
      return state;
  }
};
