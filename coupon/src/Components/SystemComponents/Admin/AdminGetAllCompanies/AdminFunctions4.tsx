import "./AdminFunctions4.css";
import axios from "axios";
import { Button, ButtonGroup } from "@material-ui/core";
import { useEffect, useState } from "react";
import Company from "../../../models/Company";
import FunctionSingleCompany from "../FunctionSingleCompany/FunctionSingleCompany";
import store from "../../../redux/store";
import JwtAxios from "../../../utils/JwtAxios";
import { useHistory } from "react-router";
import notify from "../../../utils/Notify";
import globals from "../../../utils/Globals";

/*
    ,{}, {
            headers: {
                'Authorization': store.getState().authState.token
            }}
*/
function AdminFunctions4(): JSX.Element {
    const [companies, setData] = useState([]);
    const [token, setToken] = useState();
    const history = useHistory();


    //when the component loads
    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });

    function sendDetails() {
        console.log(store.getState().authState.token);
        JwtAxios.post(globals.urls.administrator + "Admin/getAllCompanies")
            .then((response) => {
                //console.log(response.data);
                console.log(response.data);
                //console.log("my token:" + response.data.token);
                setData(response.data.company);
                console.log(companies);

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="AdminFunctions4">
            <ButtonGroup variant="contained" >
                <Button onClick={sendDetails} color="primary">Get all companies</Button>
            </ButtonGroup>

            <div className="CompaniesGetAll">
                {companies.map(item => <FunctionSingleCompany
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    password={item.password}
                    coupons={item.coupons}
                />)}
            </div>
        </div>
    );
}

export default AdminFunctions4;
