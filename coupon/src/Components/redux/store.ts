import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthState";
import { companyReducer, CompanyState } from "./CompanyState";



const reducers = combineReducers({
    companyState :companyReducer,
    authState : authReducer,
})


const store = createStore(reducers);

export default store;