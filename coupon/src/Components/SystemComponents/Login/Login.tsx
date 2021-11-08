import { useForm } from "react-hook-form";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import UserDetails from "../../models/UserDetails";
import "./Login.css";
import axios from "axios";
import {
  Button,
  ButtonGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import Notify from "../../utils/Notify";
import { useState } from "react";

import { request } from "http";
import JwtAxios from "../../utils/JwtAxios";
import store from "../../redux/store";
import notify from "../../utils/Notify";
import { AuthActionType, AuthLoginSuccessAction } from "../../redux/AuthState";
import globals from "../../utils/Globals";

function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserDetails>();
  const history = useHistory();
  //const [jwtToken, setToken] = useState("Starting token");

  function sendDetails(userDetails: UserDetails) {
    console.log("Login attempt was made");
    //console.log(userDetails);
    switch (userDetails.userType) {
      case "admin":
        axios
          .post(globals.urls.administrator + "Admin/login", userDetails)
          .then((response) => {
            console.log(store.getState().authState.token);
            //console.log(response);
            //console.log("my token: " + response.data.token);
            //setToken(response.data.token);
            store.dispatch(AuthLoginSuccessAction(true, userDetails));
            store.getState().authState.token = response.data.token;

            const user = new UserDetails();
            user.userType = "Admin";
            store.getState().authState.user = user;
            console.log(store.getState().authState.token);

            history.push("/Admin");
            notify.success("Admin Logged");
          })
          .catch((error) => {
            console.log("admin error");
            notify.error("Incorrect Email / Password");
          });
        break;

      case "company":
        axios
          .post(globals.urls.company + "Company/login", userDetails)
          .then((response) => {
            //console.log(response.data);
            store.dispatch(AuthLoginSuccessAction(true, userDetails));
            store.getState().authState.token = response.data.token;

            const user = new UserDetails();
            user.userType = "Company";
            store.getState().authState.user = user;

            history.push("/Company");
            notify.success("Company Login successfull");
          })
          .catch((error) => {
            console.log("company error");
            notify.error("Incorrect Email / Password");
          });
        break;

      case "customer":
        axios
          .post(globals.urls.customer + "Customer/login", userDetails)
          .then((response) => {
            //console.log(response);
            store.dispatch(AuthLoginSuccessAction(true, userDetails));
            store.getState().authState.token = response.data.token;

            const user = new UserDetails();
            user.userType = "Customer";
            store.getState().authState.user = user;

            history.push("/Customer");
            notify.success("Customer Login successfull");
          })
          .catch((error) => {
            console.log("customer error");
            notify.error("Incorrect Email / Password");
          });
        break;
    }
  }

  return (
    <div className="Login my-20 h-screen">
      <form
        onSubmit={handleSubmit(sendDetails)}
        className=" bg-white shadow-xl p-8 w-5/6 sm:w-1/4 mx-auto  "
      >
        <h3 className="HeadLine text-gray-900 font-bold text-3xl"> Login</h3>
        <br />
        <TextField
          label="user"
          variant="outlined"
          {...register("email", {
            required: { value: true, message: "field is required" },
            minLength: { value: 10, message: "minimum length over 10 chars" },
          })}
        />
        <span> {errors.email && <p> {errors.email.message} </p>} </span>
        <br /> <br />
        <TextField
          label="password"
          variant="outlined"
          type="password"
          {...register("password", {
            required: { value: true, message: "field is required" },
            minLength: { value: 5, message: "minimum length over 5 chars" },
          })}
        />
        <span> {errors.password && <p> {errors.password.message} </p>} </span>
        <br />
        <br />
        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
        <br />
        <Select
          label="UserType"
          style={{ width: 250 }}
          {...register("userType", {
            required: { value: true, message: "field is required" },
          })}
        >
          <MenuItem value={"admin"}>System Administrator</MenuItem>
          <MenuItem value={"company"}>Company</MenuItem>
          <MenuItem value={"customer"}>Customer</MenuItem>
        </Select>
        <span> {errors.userType && <p> {errors.userType.message} </p>} </span>
        <br />
        <br />
        <ButtonGroup variant="contained">
          <Button type="submit" color="primary">
            Send
          </Button>
        </ButtonGroup>
      </form>
      <br />
      No Account?
      <Button onClick={() => history.push("/SignUp")} color="primary">
        Sign Up
      </Button>
    </div>
  );
}

export default Login;
function jwt_decode(token: string): any {
  throw new Error("Function not implemented.");
}
