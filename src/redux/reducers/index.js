import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { restaurantReducer } from "./restaurantReducer";
import { vendorReducer } from "./vendorReducer";
import { reservationReducer } from "./reservationReducer";


const reducers = combineReducers({
    loginReducer,
    restaurantReducer,
    vendorReducer,
    reservationReducer,

})

export default reducers;