import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";
import "./CustomerPage.css";

function CustomerPage(): JSX.Element {
    const history = useHistory();

    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });
    return (
        <div className="CustomerPage">
            <br />
            <h1 className="font-bold text-2xl sm:text-3xl mb-8 text-black">
            Availabe actions:
            </h1>
            <br /> <br/>
            <NavLink exact to="/AvailableCoupons"> Purchase coupons </NavLink>
            <br /> <br/>
            <NavLink exact to="/CustomerFunctions2"> View coupons </NavLink>
            <br /> <br/>
            <NavLink exact to="/CustomerDetails"> View details </NavLink>
            <br /> <br /> <br/> <br /> <br/> <br /> <br/> <br /> <br/> <br /> <br/> <br /> <br/> <br /> <br/><br /> <br/>
        </div>
    );
}

export default CustomerPage;
