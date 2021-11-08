import { NavLink } from "react-router-dom";
import "./Aside.css";

function Aside(): JSX.Element {
    return (
        <div className="Aside">
            <nav>
                <NavLink exact to="/MainScreen"> Main screen</NavLink>
                <br />
                <NavLink exact to="/Login"> Login </NavLink>
                <br />
                <NavLink exact to="/LoginT"> LoginTemporary</NavLink>
                <br/>
                <NavLink exact to="/Admin"> Admin </NavLink>
                <br/>
                <NavLink exact to="/Company"> Company </NavLink>
                <br/>
                <NavLink exact to="/Customer"> Customer </NavLink>
            </nav>
        </div>
    );
}

export default Aside;
