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
import "./AdminFunctions7.css";

function AdminFunctions7(): JSX.Element {

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
        JwtAxios.post(globals.urls.administrator + "Admin/updateCustomer", customerDetails)
            .then((response) => {
                console.log(response.data);
                notify.success("Customer updated");
            })
            .catch(error => {
                console.log(error.data);
                notify.error("Entered id does not exist");
            })
    }

    return (
        <div className="AdminFunctions7">
            Update an existing customer
            <form onSubmit={handleSubmit(sendDetails)}>
                <TextField label="Customer Id" variant="outlined"
                    {...register("id", {
                        required: { value: true, message: "field is required" }
                    })} />
                <span> {errors.id && <p> {errors.id.message} </p>} </span>
                <br /> <br />
                <TextField label="First Name" variant="outlined"
                    {...register("firstName", {
                        required: { value: true, message: "field is required" }
                    })} />
                <span> {errors.firstName && <p> {errors.firstName.message} </p>} </span>
                <br /> <br />
                <TextField label="Last Name" variant="outlined"
                    {...register("lastName", {
                        required: { value: true, message: "field is required" }
                    })} />
                <span> {errors.lastName && <p> {errors.lastName.message} </p>} </span>
                <br /> <br />
                <TextField label="Email" variant="outlined"
                    {...register("email", {
                        required: { value: true, message: "field is required" }
                        , minLength: { value: 10, message: "minimum length over 10 chars" }
                    })} />
                <span> {errors.email && <p> {errors.email.message} </p>} </span>
                <br /> <br />
                <TextField label="Password" variant="outlined" type="password"
                    {...register("password", {
                        required: { value: true, message: "field is required" }
                        , minLength: { value: 6, message: "minimum length over 6 chars" }
                    })} />
                <span> {errors.password && <p> {errors.password.message} </p>} </span>
                <br /> <br />
                <ButtonGroup variant="contained" >
                    <Button type="submit" color="primary">Send</Button>
                </ButtonGroup>
            </form>
        </div>
    );
}

export default AdminFunctions7;



