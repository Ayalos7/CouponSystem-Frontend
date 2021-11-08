import { Select } from "@material-ui/core";
import { AccountCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import LogoImage from "../../Assests/logoImage/logoImage";
import store from "../../redux/store";
import LoginLogout from "../loginLogout/loginLogout";
import { useSelector } from "react-redux";
import "./Header.css";
import { AuthLoginSuccessAction } from "../../redux/AuthState";
import UserDetails from "../../models/UserDetails";
import notify from "../../utils/Notify";
import { Menu, Transition } from "@headlessui/react";
function Header(): JSX.Element {
  const [logged, setData] = useState("");
  //const userLogged = useSelector(store.getState);
  useSelector(store.getState);
  const history = useHistory();

  function function2() {
    history.push("/AvailableCoupons");
  }
  function logout() {
    let user = new UserDetails();

    store.dispatch(AuthLoginSuccessAction(false, user));
    history.push("/MainScreen");
    notify.success("Logout successful");
  }

  store.subscribe(() => {
    console.log(store.getState().authState.isLogin);
    console.log(store.getState().authState.user);
  });

  let isLogged = () => {
    if (store.getState().authState.isLogin) {
      switch (store.getState().authState.user.userType) {
        case "admin":
          console.log(store.getState().authState.user.email.split("@")[0]);
          return (
            <div className="dropdown">
              <button className="dropbtn">
                Welcome {store.getState().authState.user.userType}
              </button>
              <div className="dropdown-content">
                <a
                  className="hover:bg-gray-700 p-2 rounded-md"
                  onClick={() => history.push("/Admin")}
                >
                  Admin Page
                </a>
                <a
                  className="hover:bg-gray-700 p-2 rounded-md"
                  onClick={logout}
                >
                  Logout
                </a>
              </div>
            </div>
          );
          //<NavLink exact to="/MainScreen" onClick={logout} style={{ textDecoration: 'none', color: 'white' }}> Welcome {store.getState().authState.user.userType}</NavLink>
          break;
        case "company":
          console.log("im an company");
          return (
            <div className="dropdown">
              <button className="dropbtn">
                Welcome {store.getState().authState.user.email.split("@")[0]}
              </button>
              <div className="dropdown-content">
                <a onClick={() => history.push("/Company")}>Company Page</a>
                <a onClick={logout}>Logout</a>
              </div>
            </div>
          );

        //<NavLink exact to="/MainScreen" onClick={logout} style={{ textDecoration: 'none', color: 'white' }}> Welcome {store.getState().authState.user.userType}</NavLink>

        case "customer":
          console.log("im an customer");
          return (
            <div className="dropdown">
              <button className="dropbtn">
                Welcome {store.getState().authState.user.email.split("@")[0]}
              </button>
              <div className="dropdown-content">
                <a onClick={() => history.push("/Customer")}>Customer Page</a>
                <a onClick={logout}>Logout</a>
              </div>
            </div>
          );

          //<NavLink exact to="/MainScreen" onClick={logout} style={{ textDecoration: 'none', color: 'white' }}> Welcome {store.getState().authState.user.userType}</NavLink>
          break;
      }
    } else {
      return (
        <NavLink
          className="hover:bg-gray-700 p-2 rounded-md"
          exact
          to="/login"
          style={{ textDecoration: "none", color: "white" }}
        >
          Login
        </NavLink>
      );
    }
  };

  let signUp = () => {
    if (!store.getState().authState.isLogin) {
      return (
        <NavLink
          exact
          to="/SignUp"
          className="hover:bg-gray-700 p-2 rounded-md"
          style={{ textDecoration: "none", color: "white" }}
        >
          Sign Up
        </NavLink>
      );
    }
  };

  return (
    <div className="flex justify-between bg-gray-800 py-3 px-5 items-center flex-col sm:flex-row text-sm sm:text-md">
      <div className="">
        <NavLink
          exact
          to="/MainScreen"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          <LogoImage />{" "}
        </NavLink>
      </div>

      <div className="flex items-center  ">
        <br />
        {
          <div className="dropdown1 z-20">
            <button className="dropbtn1 hover:bg-gray-700 p-2 rounded-md">
              {" "}
              Available Coupons ▾
            </button>
            <div className="dropdown-content1">
              <a onClick={() => history.push("/AvailableCoupons")}>
                All Coupons
              </a>
              <a onClick={() => history.push("/AvailableCouponsElectricity")}>
                Electricity
              </a>
              <a onClick={() => history.push("/AvailableCouponsFood")}>Food</a>
              <a onClick={() => history.push("/AvailableCouponsFitness")}>
                Health & Fitness
              </a>
              <a onClick={() => history.push("/AvailableCouponsVacation")}>
                Vacation
              </a>
              <a onClick={() => history.push("/AvailableCouponsClothing")}>
                Clothing
              </a>
            </div>
          </div>
        }
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink
          exact
          to="/MainScreen"
          style={{ textDecoration: "none", color: "white" }}
          className="hover:bg-gray-700 p-2 rounded-md"
        >
          {" "}
          Home Page
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink
          exact
          to="/AboutUs"
          className="hover:bg-gray-700 p-2 rounded-md"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          About Us{" "}
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="flex items-center">
        {logged} &nbsp;&nbsp;&nbsp; {isLogged()} &nbsp;&nbsp;&nbsp;&nbsp;
        {signUp()}
      </div>
    </div>
  );
}

export default Header;
