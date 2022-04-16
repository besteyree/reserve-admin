import { ActionTypes } from "../contants/action-types";

export const getreservation = reservation => {
    return{
        type: ActionTypes.GET_RESERVATION,
        payload: reservation
    }
}
