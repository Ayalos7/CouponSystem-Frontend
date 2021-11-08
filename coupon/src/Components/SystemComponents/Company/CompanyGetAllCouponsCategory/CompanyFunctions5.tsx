import "./CompanyFunctions5.css";
import axios from "axios";
import Coupon from "../../../models/Coupon";
import { useForm } from "react-hook-form";
import { TextField, ButtonGroup, Button, InputLabel, Select, MenuItem } from "@material-ui/core";
import globals from "../../../utils/Globals";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import JwtAxios from "../../../utils/JwtAxios";
import notify from "../../../utils/Notify";
import FunctionSingleCoupon from "../FunctionSingleCoupon/FunctionSingleCoupon";


function CompanyFunctions5(): JSX.Element {
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
        JwtAxios.post(globals.urls.company + "Company/getCompanyCouponsFromCategory", couponDetails)
            .then((response) => {
                console.log(response.data);
                setData(response.data.coupons);
            })
            .catch(error => {
                console.log(error.data);
            })
    }

    return (
        <div className="CompanyFunctions5">
            view coupons by category
            <br/><br/>
            <form onSubmit={handleSubmit(sendDetails)}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select label="Category" style={{ width: 250 }} {...register("category",{required: { value: true, message: "field is required" }})}>
                    <MenuItem value={"Electric"} >Electrical</MenuItem>
                    <MenuItem value={"Vacation"}>Vacation</MenuItem>
                    <MenuItem value={"Food"}>Food</MenuItem>
                </Select>
                <span> {errors.category && <p> {errors.category.message} </p>} </span>
                <br /> <br /><br />
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

export default CompanyFunctions5;
