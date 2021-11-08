import { TextField } from "@material-ui/core";
import { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Coupon from "../../../models/Coupon";
import store from "../../../redux/store";
import globals from "../../../utils/Globals";
import JwtAxios from "../../../utils/JwtAxios";
import notify from "../../../utils/Notify";
import FunctionSingleCoupon from "../../Company/FunctionSingleCoupon/FunctionSingleCoupon";
import "./CustomerFunctions2.css";

function CustomerFunctions2(): JSX.Element {
    const [coupons, setData] = useState([]);
    const { register, handleSubmit, setError, formState: { errors } } = useForm<Coupon>();

    function sendDetails1(couponDetails: Coupon) {
        console.log(couponDetails);
        if ((couponDetails.category == "") && (couponDetails.price < 0.1)) {
            console.log(store.getState().authState.token);
            JwtAxios.post(globals.urls.customer + "Customer/getCustomerCoupons")
                .then((response) => {
                    //console.log(response.data);
                    //console.log(response.data);
                    //console.log("my token:" + response.data.token);
                    setData(response.data.coupons);
                    console.log(coupons);

                })
                .catch(error => {
                    console.log(error);
                })

        } else if ((!(couponDetails.category == "")) && (couponDetails.price < 0.1)) {
            console.log(store.getState().authState.token);
            JwtAxios.post(globals.urls.customer + "Customer/getCustomerCouponsFromCategory", couponDetails)
                .then((response) => {
                    //console.log(response.data);
                    //console.log(response.data);
                    //console.log("my token:" + response.data.token);
                    setData(response.data.coupons);
                    console.log(coupons);

                })
                .catch(error => {
                    console.log(error);
                })

        } else if ((couponDetails.category == "") && ((couponDetails.price > 0.1))) {
            console.log(store.getState().authState.token);
            couponDetails.category = "Electric"
            JwtAxios.post(globals.urls.customer + "Customer/getCustomerCouponsUpToPrice", couponDetails)
                .then((response) => {
                    //console.log(response.data);
                    //console.log(response.data);
                    //console.log("my token:" + response.data.token);
                    setData(response.data.coupons);
                    console.log(coupons);

                })
                .catch(error => {
                    console.log(error);
                })

        } else if ((!(couponDetails.category == "")) && (couponDetails.price > 0.1)) {
            notify.error("Fill only 1 field - Category or Price");
        } else {
            notify.error("No coupons to be presented");
        }

    }
    function sendDetails2() {

    }
    function sendDetails3() {

    }
    return (
        <div className="CustomerFunctions2">
            <form onSubmit={handleSubmit(sendDetails1)}>
                <TextField label="Type Category" variant="outlined"
                    {...register("category")} />
                <span> {errors.category && <p> {errors.category.message} </p>} </span>
                <br /> <br />
                <TextField label="Up To Price" variant="outlined"
                    {...register("price")} />
                <br /> <br />
                <ButtonGroup >
                    <Button type="submit" color="primary">Press to see coupons</Button>
                </ButtonGroup>
            </form>

            <div>
                {coupons.map(item => <FunctionSingleCoupon
                    id={item.id}
                    companyID={item.companyId}
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

export default CustomerFunctions2;
