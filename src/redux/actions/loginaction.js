import { ActionTypes } from "../contants/action-types";

export const login = logininfo => {
    return{
        type: ActionTypes.SET_LOGIN,
        payload: logininfo
    }
}

export const logout = () => {
    return{
        type: ActionTypes.SET_LOGOUT,
    }
}

