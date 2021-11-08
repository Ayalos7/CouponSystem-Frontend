import Coupon from "../../../models/Coupon";
import "./CompanyFunctions6.css";
import axios from "axios";
import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import globals from "../../../utils/Globals";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import JwtAxios from "../../../utils/JwtAxios";
import notify from "../../../utils/Notify";
import FunctionSingleCoupon from "../FunctionSingleCoupon/FunctionSingleCoupon";

function CompanyFunctions6(): JSX.Element {
    const [coupons, setData] = useState([]);
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
        JwtAxios.post(globals.urls.company + "Company/getCompanyCouponsUpToPrice", couponDetails)
            .then((response) => {
                console.log(response.data);
                setData(response.data.coupons);
            })
            .catch(error => {
                console.log(error.data);
            })
    }

    return (
        <div className="CompanyFunctions6">
            view coupons by price
            <form onSubmit={handleSubmit(sendDetails)}>
                <TextField label="Up to price" variant="outlined"
                    {...register("price", {
                        required: { value: true, message: "field is required" }
                    })} />
                <span> {errors.price && <p> {errors.price.message} </p>} </span> <br /> <br />
                <ButtonGroup variant="contained" >
                    <Button type="submit" color="primary">Send</Button>
                </ButtonGroup>
            </form>
            <div>
                {coupons.map(item => <FunctionSingleCoupon
                    id={item.id}
                    companyID={item.companyID}
                    category={item.category}
                    title={item.title}
                    description={item.description}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    amount={item.amount}
                    price={item.price}
                    image={item.image}
                />)}
            </div>
        </div>
    );
}

export default CompanyFunctions6;
