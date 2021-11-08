import { userInfo } from "os";
import { tokenToString } from "typescript";
import Company from "../models/Company";
import UserDetails from "../models/UserDetails";
import jwt_decode from "jwt-decode";
import store from "./store";

export class AuthState {
    public isLogin: boolean=false;
    public user: UserDetails=null
    public token: string = "";
}

export enum AuthActionType {
    RequestLogin = "RequestLogin",
    RequestLoginFail = "RequestLoginFail",
    RequestLoginSuccess = "RequestLoginSuccess",
    RequestLogOut = "RequestLogout",
}

export interface AuthAction {
    type: AuthActionType,
    payload?: any,
}

//action functions

export function AuthLoginAction(user: UserDetails): AuthAction {
    return { type: AuthActionType.RequestLogin, payload: user }
}

export function AuthLoginFailAction(isLogin: boolean): AuthAction {
    return { type: AuthActionType.RequestLoginFail, payload: isLogin }
}

export function AuthLoginSuccessAction(isLogin: boolean,user: UserDetails): AuthAction {
    return { type: AuthActionType.RequestLoginSuccess, payload: {isLogin,user} }
}

export function AuthLogoutAction(isLogin: boolean): AuthAction {
    return { type: AuthActionType.RequestLogOut, payload: isLogin }
}

//reducer
export function authReducer(currentState: AuthState = new AuthState(), action: AuthAction): AuthState {
    const newState = { ...currentState }; //spread variable

    switch (action.type) {
        case AuthActionType.RequestLogin:
            //extract user info from jwt token : user email, user type, user number
            // var user : UserDetails;
            // JSON.parse(atob(store.getState().authState.token.split('.')[1]));
            var email = JSON.parse(atob(store.getState().authState.token.split('.')[1])).sub;
            var pass = JSON.parse(atob(store.getState().authState.token.split('.')[1])).userPass;
            var userType = JSON.parse(atob(store.getState().authState.token.split('.')[1])).userType;
            newState.isLogin = true;
            break;
        case AuthActionType.RequestLoginFail:
            newState.isLogin = action.payload;
            break;
        case AuthActionType.RequestLoginSuccess:
            console.log(action.payload);
            newState.isLogin = action.payload.isLogin;
            newState.user=action.payload.user;
            break;
        case AuthActionType.RequestLogOut:
            newState.isLogin = action.payload;
            break;
    }

    return newState;
}