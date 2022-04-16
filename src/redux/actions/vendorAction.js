import { ActionTypes } from "../contants/action-types";


export const getVendors = (vendors) => {
    return{
        type: ActionTypes.GET_VENDORS,
        payload: vendors,
    }
}