import { ActionTypes } from "../contants/action-types";


export const setRestaurants = (restaurants) => {
    return{
        type: ActionTypes.SET_RESTAURANTS,
        payload: restaurants,
    }
}

export const getRestaurantsDetails = (restaurantsdetails) => {
    return{
        type: ActionTypes.GET_RESTAURANT_DETAILS,
        payload: restaurantsdetails,
    }
}

export const getlistTableTypes = (listtabletype) => {
    return{
        type: ActionTypes.LIST_TABLE_TYPE,
        payload: listtabletype,
    }
}

export const getlistTable = (listtable) => {
    return{
        type: ActionTypes.LIST_TABLE,
        payload: listtable,
    }
}