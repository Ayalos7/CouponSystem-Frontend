import { ButtonGroup, Button } from "@material-ui/core";
import "./CompanyFunctions4.css";
import axios from "axios";
import globals from "../../../utils/Globals";
import { useEffect, useState } from "react";
import FunctionSingleCoupon from "../FunctionSingleCoupon/FunctionSingleCoupon";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import JwtAxios from "../../../utils/JwtAxios";
import notify from "../../../utils/Notify";

function CompanyFunctions4(): JSX.Element {
    const [coupons, setData] = useState([]);
    const history = useHistory();

 //when the component loads
 useEffect(()=>{
    if(store.getState().authState.token==""){
     notify.error("Unauthorized - Log in the system");
     history.push("/Login");
    }
});

    function sendDetails() {
        JwtAxios.post(globals.urls.company + "Company/getCompanyCoupons")
            .then((response) => {
                console.log(response.data);
                setData(response.data.coupons);
            })
            .catch(error => {
                console.log(error.data);
            })
    }

    return (
        <div className="CompanyFunctions4">
            <ButtonGroup variant="contained" >
                <Button onClick={sendDetails} color="primary">Get all coupons</Button>
            </ButtonGroup>

            <div className="CouponGetAll">
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

export default CompanyFunctions4;
