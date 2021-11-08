import "./CompanyFunctions7.css";
import axios from "axios";
import { ButtonGroup, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import JwtAxios from "../../../utils/JwtAxios";
import notify from "../../../utils/Notify";
import FunctionSingleCompany from "../../Admin/FunctionSingleCompany/FunctionSingleCompany";
import globals from "../../../utils/Globals";


function CompanyFunctions7(): JSX.Element {
    const history = useHistory();
    const [company, setData] = useState([]);

    //when the component loads
    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });

    function sendDetails() {
        JwtAxios.post(globals.urls.company + "Company/getCompanyDetails")
            .then((response) => {
                console.log(response.data);
                setData(response.data.company);
            })
            .catch(error => {
                console.log(error.data);
            })
    }

    return (
        <div className="CompanyFunctions7">
            <ButtonGroup variant="contained" >
                <Button onClick={sendDetails} color="primary">Get company details</Button>
            </ButtonGroup>
            <div>
                {company.map(item => <FunctionSingleCompany
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    password={item.password}
                    coupons={item.coupons}
                />)}
            </div>
        </div>
    );
}


export default CompanyFunctions7;
