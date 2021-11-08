import { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import globals from "../../../utils/Globals";
import JwtAxios from "../../../utils/JwtAxios";
import notify from "../../../utils/Notify";
import FunctionSingleCustomer from "../../Admin/FunctionSingleCustomer/FunctionSingleCustomer";
import "./CustomerDetails.css";

function CustomerDetails(): JSX.Element {
    const history = useHistory();
    const [customer, setData] = useState([]);

    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });

    function sendDetails() {
        console.log(store.getState().authState.token);
        JwtAxios.post(globals.urls.customer+"Customer/getCustomerDetails")
            .then((response) => {
                //console.log(response.data);
                setData(response.data.customer);
            })
            .catch(error => {
                console.log(error.data);
            })
    }

    return (
        <div className="CustomerDetails">

            <ButtonGroup >
                <Button onClick={sendDetails} color="primary">Get customer details</Button>
            </ButtonGroup>
            <div>
                {customer.map(item => <FunctionSingleCustomer
                    id={item.id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    password={item.password}
                />)}
            </div>
        </div>
    );
}

export default CustomerDetails;
