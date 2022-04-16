import { ActionTypes } from "../contants/action-types";

const initialState = {
  reservation: [],
};

export const reservationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_RESERVATION:
      return { ...state, reservation: payload };
    default:
      return state;
  }
};
