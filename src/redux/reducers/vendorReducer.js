import { ActionTypes } from "../contants/action-types";

const initialState = {
    vendors: [],
  };

  export const vendorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.GET_VENDORS:
        return { ...state, vendors: payload };
      default:
        return state;
    }
  };
  