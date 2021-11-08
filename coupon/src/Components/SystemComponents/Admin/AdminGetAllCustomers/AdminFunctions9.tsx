import { Button, ButtonGroup } from "@material-ui/core";
import "./AdminFunctions9.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FunctionSingleCustomer from "../FunctionSingleCustomer/FunctionSingleCustomer";
import JwtAxios from "../../../utils/JwtAxios";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";
import globals from "../../../utils/Globals";

function AdminFunctions9(): JSX.Element {
    const [customers, setData] = useState([]);
    const history = useHistory();

    //when the component loads
    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });

    function sendDetails() {
        JwtAxios.post(globals.urls.administrator + "Admin/getAllCustomers")
            .then((response) => {
                console.log(response.data);
                setData(response.data.customer);
            })
            .catch(error => {
                console.log(error.data);
            })
    }

    return (
        <div className="AdminFunctions9">

            <ButtonGroup variant="contained" >
                <Button onClick={sendDetails} color="primary">Get all customers</Button>
            </ButtonGroup>

            <div className="CustomerGetAll">
                {customers.map(item => <FunctionSingleCustomer
                    id={item.id}
                    lastName={item.firstName}
                    firstName={item.lastName}
                    email={item.email}
                    password={item.password}

                />)}
            </div>
        </div>
    );
}

export default AdminFunctions9;
