import { Button, ButtonGroup, TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Coupon from "../../../models/Coupon";
import store from "../../../redux/store";
import globals from "../../../utils/Globals";
import JwtAxios from "../../../utils/JwtAxios";
import notify from "../../../utils/Notify";
import "./CompanyFunctions3.css";

function CompanyFunctions3(): JSX.Element {

    const { register, handleSubmit, formState: { errors } } = useForm<Coupon>();
    const history = useHistory();

    //when the component loads
    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });

    function sendDetails(couponDetails: Coupon) {
        console.log(couponDetails);
        JwtAxios.post(globals.urls.company + "Company/deleteCoupon", couponDetails)
            .then((response) => {
                console.log(response.data);
                notify.success("Coupon was deleted");
            })
            .catch(error => {
                console.log(error.data);
                notify.error("Entered id does not exist");
            })
    }

    return (
        <div className="CompanyFunctions3">
            Delete an existing Coupon
            <form onSubmit={handleSubmit(sendDetails)}>
                <TextField label="Coupon Id" variant="outlined"
                    {...register("id", {
                        required: { value: true, message: "field is required" }
                    })} />
                <span> {errors.id && <p> {errors.id.message} </p>} </span>
                <br /> <br />
                <ButtonGroup variant="contained" >
                    <Button type="submit" color="primary">Send</Button>
                </ButtonGroup>

            </form>
        </div>
    );
}

export default CompanyFunctions3;
