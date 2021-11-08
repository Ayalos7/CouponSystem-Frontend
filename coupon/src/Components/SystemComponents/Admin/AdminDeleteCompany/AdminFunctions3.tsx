import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Company from "../../../models/Company";
import "./AdminFunctions3.css";
import axios from "axios";
import JwtAxios from "../../../utils/JwtAxios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";
import globals from "../../../utils/Globals";

function AdminFunctions3(): JSX.Element {

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

        JwtAxios.post(globals.urls.administrator + "Admin/deleteCompany", companyDetails)
            .then((response) => {
                console.log(response.data);
                notify.success("Company was deleted");
            })
            .catch(error => {
                console.log(error.data);
                notify.error("Entered Id does not exist");
            })
    }

    return (
        <div className="AdminFunctions3">
            Delete an existing company
            <form onSubmit={handleSubmit(sendDetails)}>
                <TextField label="Company Id" variant="outlined"
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

export default AdminFunctions3;
