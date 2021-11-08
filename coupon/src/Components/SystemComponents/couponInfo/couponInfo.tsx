import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Coupon from "../../models/Coupon";
import globals from "../../utils/Globals";
import "./couponInfo.css";

interface couponParams {
    title: string;
}

function CouponInfo(props: couponParams): JSX.Element {
    const {title} = useParams<{title?:string}>();
    var [coupon, setData] = useState(new Coupon());
    function buyCoupon() {

    }
    useEffect(()=>{
        const couponF = new Coupon;
        couponF.title=title;
        axios.post(globals.urls.guest + "Guest/getAllCouponsByName",couponF)
        .then((response) => {
            setData(response.data)
        })
        .catch(error => {
            console.log(error.data);

        })
    },[]);

    return (
        <div className="couponInfo">
            Full Coupon details for coupon :{title} <hr />
            <div className="bigBox">
                category: {coupon.category}<br />
                description:{coupon.description}<br />
                start date: {coupon.startDate}<br />
                end date: {coupon.endDate}<br />
                amount:{coupon.amount}<br />
                price: {coupon.price}<br />
                <input type="button" value="more information" onClick={buyCoupon} />
            </div>
        </div>
    );
}

export default CouponInfo;
