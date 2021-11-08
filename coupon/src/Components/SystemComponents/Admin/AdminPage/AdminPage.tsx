import { Button, ButtonGroup, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";

import "./AdminPage.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";



function AdminPage(): JSX.Element {

      //when the component loads
      useEffect(()=>{
        if(store.getState().authState.token==""){
         notify.error("Unauthorized - Log in the system");
         history.push("/Login");
        }
    });
    
    const history = useHistory();

    function adminFunctionsDirect1() {
        history.push("/AdminAddCompany");
    }
    function adminFunctionsDirect2() {
        history.push("/AdminUpdateCompany");
    }
    function adminFunctionsDirect3() {
        history.push("/AdminDeleteCompany");
    }
    function adminFunctionsDirect4() {
        history.push("/AdminGetAllCompanies");
    }
    function adminFunctionsDirect5() {
        history.push("/AdminGetOneCompany");
    }
    function adminFunctionsDirect6() {
        history.push("/AdminAddCustomer");
    }
    function adminFunctionsDirect7() {
        history.push("/AdminUpdateCustomer");
    }
    function adminFunctionsDirect8() {
        history.push("/AdminDeleteCustomer");
    }
    function adminFunctionsDirect9() {
        history.push("/AdminGetAllCustomers");
    }
    function adminFunctionsDirect10() {
        history.push("/AdminGetOneCustomer");
    }


    return (
        <div className="AdminPage">
            System Administrator control page:
            <br />
            Availabe actions:
            <br />
            <button onClick={adminFunctionsDirect1}  > Add Company </button>
            <button onClick={adminFunctionsDirect2}  >Update Company </button>
            <button onClick={adminFunctionsDirect3}  >Delete Company </button>
            <button onClick={adminFunctionsDirect4} >Get all Companies </button>
            <button onClick={adminFunctionsDirect5}>Get one Company </button>
            <button onClick={adminFunctionsDirect6} >Add Customer </button>
            <button onClick={adminFunctionsDirect7} >Update Customer </button>
            <button onClick={adminFunctionsDirect8} >Delete Customer </button>
            <button onClick={adminFunctionsDirect9} >Get all Customers </button>
            <button onClick={adminFunctionsDirect10} >Get one Customer </button>
        </div>
    );
}

export default AdminPage;
