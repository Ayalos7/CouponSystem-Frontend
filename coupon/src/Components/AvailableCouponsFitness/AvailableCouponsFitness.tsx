import { Button, ButtonGroup, TextField } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Coupon from "../models/Coupon";
import FunctionSingleCouponMain2 from "../SystemComponents/FunctionSingleCouponMain2/FunctionSingleCouponMain2";
import globals from "../utils/Globals";
import notify from "../utils/Notify";
import "./AvailableCouponsFitness.css";

function AvailableCouponsFitness(): JSX.Element {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<Coupon>();
    const history = useHistory();
    const [coupons, setData] = useState([]);
    

    useEffect(() => {
        var coupon = new Coupon();
        coupon.category = "Fitness";
        axios.post(globals.urls.guest + "Guest/getAllCouponsFromCategory", coupon)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error.data);
            })
    },[]);

  

   

    return (
        <div className="AvailableCoupons">
            
            <div className="Coupons">
              

                {coupons.map(item => <FunctionSingleCouponMain2
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

                {//{coupPics1.map(item => <NavLink exact to="/Login" style={{ textDecoration: 'none', color: 'black' }}> <ImgProps2 img={item.img} title={item.name} /> </NavLink>)}
                }
            </div>
        </div>
    );
}

export default AvailableCouponsFitness;
