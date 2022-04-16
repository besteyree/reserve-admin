import { ActionTypes } from "../contants/action-types";

const initialState = {
  logininfo: [],
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LOGIN:
      return { ...state, logininfo: payload };
    case ActionTypes.SET_LOGOUT:
      return (state);

    default:
      return state;
  }
};

//   case ActionTypes.GET_VENDORS:
//     return { ...state, vendors: payload };
