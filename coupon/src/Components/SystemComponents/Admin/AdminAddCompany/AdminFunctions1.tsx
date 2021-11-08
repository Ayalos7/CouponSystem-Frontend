import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Company from "../../../models/Company";
import "./AdminFunctions1.css";
import axios from "axios";
import globals from "../../../utils/Globals";
import JwtAxios from "../../../utils/JwtAxios";
import { useEffect } from "react";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";
import { useHistory } from "react-router";
function AdminFunctions1(): JSX.Element {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<Company>();
    const history = useHistory();

 //when the component loads
 useEffect(()=>{
    if(store.getState().authState.token==""){
     notify.error("Unauthorized - Log in the system");
     history.push("/Login");
    }
});

    function sendDetails(companyDetails: Company) {
        console.log(companyDetails);
        JwtAxios.post(globals.urls.administrator + "Admin/addCompany", companyDetails)
            .then((response) => {
                console.log(response.data);
                notify.success("Company Added");
            })
            .catch(error => {
                console.log("error in method");
            })
    }


    return (
        <div className="AdminFunctions1">
            Add a new Company to the system:
            <br /> <br />
            <form onSubmit={handleSubmit(sendDetails)}>
                <TextField label="Company name" variant="outlined"
                    {...register("name", {
                        required: { value: true, message: "field is required" }
                        , minLength: { value: 3, message: "minimum length over 3 chars" }
                    })} />
                <span> {errors.name && <p> {errors.name.message} </p>} </span>
                <br /> <br />
                <TextField label="Company Email" variant="outlined"
                    {...register("email", {
                        required: { value: true, message: "field is required" }
                        , minLength: { value: 10, message: "minimum length over 10 chars" }
                    })} />
                <span> {errors.email && <p> {errors.email.message} </p>} </span>
                <br /> <br />
                <TextField label="Company Password" variant="outlined" type="password"
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

export default AdminFunctions1;
