import { Button, ButtonGroup, TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Customer from "../../../models/Customer";
import store from "../../../redux/store";
import globals from "../../../utils/Globals";
import JwtAxios from "../../../utils/JwtAxios";
import notify from "../../../utils/Notify";
import "./AdminFunctions8.css";

function AdminFunctions8(): JSX.Element {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<Customer>();
    const history = useHistory();

    //when the component loads
    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });

    function sendDetails(customerDetails: Customer) {
        console.log(customerDetails);
        JwtAxios.post(globals.urls.administrator + "Admin/deleteCustomer", customerDetails)
            .then((response) => {
                console.log(response.data);
                notify.success("Customer was deleted");
            })
            .catch(error => {
                console.log(error.data);
                notify.error("Entered id does not exist");
            })
    }

    return (
        <div className="AdminFunctions8">
            Delete an existing customer
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
        </div>
    );
}

export default AdminFunctions8;
