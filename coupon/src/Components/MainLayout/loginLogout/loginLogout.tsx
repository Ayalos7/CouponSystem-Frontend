import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import store from "../../redux/store";
import "./loginLogout.css";

function LoginLogout(): JSX.Element {

    useEffect(()=>{
        store.subscribe(()=>{
            
        })
    })

    if (store.getState().authState.token.length<3){
        return (
            <div className="loginLogout">
            
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink exact to="/Login" style={{ textDecoration: 'none', color: 'white' }}> Login </NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink exact to="/SignUp" style={{ textDecoration: 'none', color: 'white' }}> Sign Up </NavLink>
            </div>
        );
    } else {
        return (
            <div className="loginLogout">
            <NavLink exact to="/Logout" style={{ textDecoration: 'none', color: 'white' }}> Logout </NavLink>
            </div>
        );
    }

}

export default LoginLogout;
