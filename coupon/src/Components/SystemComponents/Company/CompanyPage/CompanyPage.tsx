import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";
import "./CompanyPage.css";

function CompanyPage(): JSX.Element {
    const history = useHistory();

 //when the component loads
 useEffect(()=>{
    if(store.getState().authState.token==""){
     notify.error("Unauthorized - Log in the system");
     history.push("/Login");
    }
});

    

    function CompanyFunctionsDirect1() {
        history.push("/CompanyAddCoupon");
    }
    function CompanyFunctionsDirect2() {
        history.push("/CompanyUpdateCoupon");
    }
    function CompanyFunctionsDirect3() {
        history.push("/CompanyDeleteCoupon");
    }
    function CompanyFunctionsDirect4() {
        history.push("/CompanyGetAllCoupons");
    }
    function CompanyFunctionsDirect5() {
        history.push("/CompanyGetAllCouponsCategory");
    }
    function CompanyFunctionsDirect6() {
        history.push("/CompanyGetAllCouponsPrice");
    }
    function CompanyFunctionsDirect7() {
        history.push("/CompanyDetails");
    }


    return (
        <div className="CompanyPage">
            Company control page:
            <br />
            Availabe actions:
            <br />
            <button onClick={CompanyFunctionsDirect1}  > Add Coupon </button> &nbsp;&nbsp;
            <button onClick={CompanyFunctionsDirect2}  > Update Coupon </button> &nbsp;&nbsp;
            <button onClick={CompanyFunctionsDirect3}  > Delete Coupon </button> &nbsp;&nbsp;
            <button onClick={CompanyFunctionsDirect4} > Get all Coupons </button> &nbsp;&nbsp;
            <button onClick={CompanyFunctionsDirect5} > Get all Coupons by category </button> &nbsp;&nbsp;
            <button onClick={CompanyFunctionsDirect6} > Get all Coupons by price </button> &nbsp;&nbsp;
            <button onClick={CompanyFunctionsDirect7} > Get Company details </button> &nbsp;&nbsp;
        </div>
    );
}

export default CompanyPage;
