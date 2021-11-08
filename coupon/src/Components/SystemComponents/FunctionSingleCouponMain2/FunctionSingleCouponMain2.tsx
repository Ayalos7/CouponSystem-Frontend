import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import Coupon from "../../models/Coupon";
import store from "../../redux/store";
import globals from "../../utils/Globals";
import JwtAxios from "../../utils/JwtAxios";
import notify from "../../utils/Notify";
import "./FunctionSingleCouponMain2.css";

interface FunctionSingleCoupon2Props {
  id: number;
  companyID: number;
  category: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  amount: number;
  price: number;
  image: string;
}

function FunctionSingleCouponMain2(
  props: FunctionSingleCoupon2Props
): JSX.Element {
  const size = 200;
  const history = useHistory();

  function buyCoupon() {
    console.log(store.getState().authState);
    if (store.getState().authState.isLogin == true) {
      if (store.getState().authState.user.userType === "Customer") {
        const coupon = new Coupon();
        coupon.amount = props.amount;
        coupon.category = props.category;
        coupon.companyID = props.companyID;
        coupon.description = props.description;
        coupon.endDate = props.endDate;
        coupon.id = props.id;
        coupon.image = props.image;
        coupon.price = props.price;
        coupon.startDate = props.startDate;
        coupon.title = props.title;
        console.log(coupon);
        //console.log("you have a token:" + store.getState().authState.token);
        JwtAxios.post(
          globals.urls.customer+ "Customer/purchaseCoupon",
          coupon
        )
          .then((response) => {
            console.log(response);
            //console.log("my token: " + response.data.token);
            store.getState().authState.token = response.data.token;
            console.log(store.getState().authState.token);

            notify.success("Coupon purchased");
          })
          .catch((error) => {
            console.log("could not purchase coupon");
            notify.error("error- could not purchase coupon");
          });
      }
    } else {
      notify.error("Login as a customer in order to purchase coupons");
    }
  }

  return (
    <div className=" ImgProps bigBox mx-auto bg-purple-400 hover:bg-purple-500 transition duration-150 ease-out text-white p-5 rounded-lg  mb-5">
      <div className="">
        <img
          src={props.image}
          className="mx-auto mb-4 rounded-md w-full object-cover h-36  sm:h-28 sm:w-48"
        />
      </div>
      <div className="h-28">
        <h3 className="font-semibold">{props.title} </h3>
        Price: {props.price} <br />
        Amount:{props.amount}
        <br />
        End date: {props.endDate}
        <br />
      </div>
      <button
        className="p-2 bg-white rounded-md text-gray-900 mt-4 transform hover:rotate-6 transition duration-150 shadow-lg ease-out"
        color="primary"
        onClick={buyCoupon}
      >
        Buy coupon
      </button>
    </div>
  );
}

export default FunctionSingleCouponMain2;
