import { Button, ButtonGroup, TextField } from "@material-ui/core";
import "./AdminFunctions10.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import Customer from "../../../models/Customer";
import { useHistory } from "react-router";
import JwtAxios from "../../../utils/JwtAxios";
import { useEffect, useState } from "react";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";
import FunctionSingleCustomer from "../FunctionSingleCustomer/FunctionSingleCustomer";
import globals from "../../../utils/Globals";

function AdminFunctions10(): JSX.Element {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<Customer>();
    const history = useHistory();
    const [customer, setData] = useState([]);

    //when the component loads
    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });

    function sendDetails(customerDetails: Customer) {
        JwtAxios.post(globals.urls.administrator + "Admin/getOneCustomer", customerDetails)
            .then((response) => {
                if (response.data.customer[0] == null) {
                    notify.error("No such id");
                } else {
                    console.log(response.data);
                    setData(response.data.customer);
                }
            })
            .catch(error => {
                console.log(error.data);
                notify.error("Entered id does not exist");
            })
    }

    return (
        <div className="AdminFunctions10">
            get one customer
            <form onSubmit={handleSubmit(sendDetails)}>
                <TextField label="Customer Id" variant="outlined"
                    {...register("id", {
                        required: { value: true, message: "field is required" }
                    })} />
                <span> {errors.id && <p> {errors.id.message} </p>} </span> <br /> <br />
                <ButtonGroup variant="contained" >
                    <Button type="submit" color="primary">Send</Button>
                </ButtonGroup>
            </form>
            <div>
                {customer.map(item => <FunctionSingleCustomer
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

export default AdminFunctions10;
