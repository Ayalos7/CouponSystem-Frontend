import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Company from "../../../models/Company";
import "./AdminFunctions5.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FunctionSingleCompany from "../FunctionSingleCompany/FunctionSingleCompany";
import JwtAxios from "../../../utils/JwtAxios";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";
import globals from "../../../utils/Globals";

function AdminFunctions5(): JSX.Element {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<Company>();
    const [company, setData] = useState([]);
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
        JwtAxios.post(globals.urls.administrator + "Admin/GetOneCompany", companyDetails)
            .then((response) => {
                console.log(response.data)
                if (response.data.company[0] == null) {

                    notify.error("No such id");
                }
                else {

                    setData(response.data.company)
                }

            })
            .catch(error => {
                console.log(error.data);
                notify.error("Entered id does not exist");
            })
    }


    return (
        <div className="AdminFunctions5">
            get one company
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

            <div className="CompaniesGetOne">
                {company.map(item => <FunctionSingleCompany
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

export default AdminFunctions5;
