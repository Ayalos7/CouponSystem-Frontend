import { Button, ButtonGroup, TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";

import Coupon from "../../models/Coupon";

import globals from "../../utils/Globals";
import notify from "../../utils/Notify";
import FunctionSingleCouponMain2 from "../FunctionSingleCouponMain2/FunctionSingleCouponMain2";

import "./AvailableCoupons.css";

function AvailableCoupons(): JSX.Element {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Coupon>();
  const history = useHistory();
  const [coupons, setData] = useState([]);

  useEffect(() => {
    axios
      .post(globals.urls.guest + "Guest/getAllCoupons")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

  function sendDetails(couponDetails: Coupon) {
    axios
      .post(globals.urls.guest + "Guest/getAllCouponsByName", couponDetails)
      .then((response) => {
        console.log(response.data);
        if (response.data.length == 0) {
          notify.error("No products were found");
        }
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }

  return (
    <div className="AvailableCoupons my-10 h-full">
      <div className="FilterBar">
        <form
          onSubmit={handleSubmit(sendDetails)}
          className="flex items-center mx-auto justify-center"
        >
          <TextField
            label="Search by name"
            variant="filled"
            {...register("title", {
              required: { value: true, message: "field is required" },
            })}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <ButtonGroup variant="contained">
            <Button type="submit" color="primary">
              Send
            </Button>
          </ButtonGroup>
        </form>
        <br />
        <br />
        <br />
      </div>
      <div className="Coupons max-w-xs sm:max-w-screen-xl mx-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 items-center md:px-5 lg:px-3">
        {coupons.map((item) => (
          <FunctionSingleCouponMain2
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
          />
        ))}

        {
          //{coupPics1.map(item => <NavLink exact to="/Login" style={{ textDecoration: 'none', color: 'black' }}> <ImgProps2 img={item.img} title={item.name} /> </NavLink>)}
        }
      </div>
    </div>
  );
}

export default AvailableCoupons;
