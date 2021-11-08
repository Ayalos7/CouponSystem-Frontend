import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Company from "../../../models/Company";
import "./AdminFunctions2.css";
import axios from "axios";
import JwtAxios from "../../../utils/JwtAxios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";
import globals from "../../../utils/Globals";

function AdminFunctions2(): JSX.Element {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<Company>();
    const history = useHistory();

    //when the component loads
    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });

    function sendDetails(companyDetails: Company) {
        console.log(companyDetails);
        JwtAxios.post(globals.urls.administrator + "Admin/updateCompany", companyDetails)
            .then((response) => {
                console.log(response.data);
                notify.success("Company Updated");
            })
            .catch(error => {
                console.log(error.data);
                notify.success("Entered id does not exist");
            })
    }

    return (
        <div className="AdminFunctions2">
            Update an existing company:
            <br /> <br />
            <form onSubmit={handleSubmit(sendDetails)}>
                <TextField label="Company Id" variant="outlined"
                    {...register("id", {
                        required: { value: true, message: "field is required" }

                    })} />
                <span> {errors.id && <p> {errors.id.message} </p>} </span>
                <br /> <br />
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

export default AdminFunctions2;
