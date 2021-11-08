import { Redirect, Route, Switch } from "react-router-dom";
import AboutUs from "../../SystemComponents/AboutUs/AboutUs";
import AdminFunctions1 from "../../SystemComponents/Admin/AdminAddCompany/AdminFunctions1";
import AdminFunctions10 from "../../SystemComponents/Admin/AdminGetOneCustomer/AdminFunctions10";
import AdminFunctions2 from "../../SystemComponents/Admin/AdminUpdateCompany/AdminFunctions2";
import AdminFunctions3 from "../../SystemComponents/Admin/AdminDeleteCompany/AdminFunctions3";
import AdminFunctions4 from "../../SystemComponents/Admin/AdminGetAllCompanies/AdminFunctions4";
import AdminFunctions5 from "../../SystemComponents/Admin/AdminGetOneCompany/AdminFunctions5";
import AdminFunctions6 from "../../SystemComponents/Admin/AdminAddCustomer/AdminFunctions6";
import AdminFunctions7 from "../../SystemComponents/Admin/AdminUpdateCustomer/AdminFunctions7";
import AdminFunctions8 from "../../SystemComponents/Admin/AdminDeleteCustomer/AdminFunctions8";
import AdminFunctions9 from "../../SystemComponents/Admin/AdminGetAllCustomers/AdminFunctions9";
import AdminPage from "../../SystemComponents/Admin/AdminPage/AdminPage";
import AvailableCoupons from "../../SystemComponents/AvailableCoupons/AvailableCoupons";
import CompanyFunctions1 from "../../SystemComponents/Company/CompanyAddCoupon/CompanyFunctions1";
import CompanyFunctions2 from "../../SystemComponents/Company/CompanyUpdateCoupon/CompanyFunctions2";
import CompanyFunctions3 from "../../SystemComponents/Company/CompanyDeleteCoupon/CompanyFunctions3";
import CompanyFunctions4 from "../../SystemComponents/Company/CompanyGetAllCoupons/CompanyFunctions4";
import CompanyFunctions5 from "../../SystemComponents/Company/CompanyGetAllCouponsCategory/CompanyFunctions5";
import CompanyFunctions6 from "../../SystemComponents/Company/CompanyGetAllCouponsPrice/CompanyFunctions6";
import CompanyFunctions7 from "../../SystemComponents/Company/CompanyDetails/CompanyFunctions7";
import CompanyPage from "../../SystemComponents/Company/CompanyPage/CompanyPage";

import CustomerFunctions1 from "../../SystemComponents/Customer/CustomerFunctions1/CustomerFunctions1";
import CustomerFunctions2 from "../../SystemComponents/Customer/CustomerFunctions2/CustomerFunctions2";
import CustomerPage from "../../SystemComponents/Customer/CustomerPage/CustomerPage";
import Login from "../../SystemComponents/Login/Login";
import LoginTemporary from "../../SystemComponents/LoginTemporary/LoginTemporary";
import SignUp from "../../SystemComponents/SignUp/SignUp";
import MainScreen from "../MainScreen/MainScreen";
import MainScreenR from "../MainScreenR/MainScreenR";
import couponInfo from "../../SystemComponents/couponInfo/couponInfo";
import CustomerDetails from "../../SystemComponents/Customer/CustomerDetails/CustomerDetails";
import AvailableCouponsElectricity from "../../AvailableCouponsElectricity/AvailableCouponsElectricity";
import AvailableCouponsClothing from "../../AvailableCouponsClothing/AvailableCouponsClothing";
import AvailableCouponsFitness from "../../AvailableCouponsFitness/AvailableCouponsFitness";
import AvailableCouponsFood from "../../AvailableCouponsFood/AvailableCouponsFood";
import AvailableCouponsVacation from "../../AvailableCouponsVacation/AvailableCouponsVacation";
import Page404 from "../Page404/Page404";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Switch>
        <Redirect from="/" to="/MainScreen" exact />
        <Route path="/MainScreen" component={MainScreenR} exact />
        <Route path="/AboutUs" component={AboutUs} exact />
        <Route path="/AvailableCoupons" component={AvailableCoupons} exact />
        <Route path="/AvailableCouponsElectricity" component={AvailableCouponsElectricity} exact />
        <Route
          path="/AvailableCouponsClothing"
          component={AvailableCouponsClothing}
          exact
        />
        <Route
          path="/AvailableCouponsFitness"
          component={AvailableCouponsFitness}
          exact
        />
        <Route
          path="/AvailableCouponsFood"
          component={AvailableCouponsFood}
          exact
        />
        <Route
          path="/AvailableCouponsVacation"
          component={AvailableCouponsVacation}
          exact
        />
        <Route path="/Login" component={Login} exact />
        <Route path="/SignUp" component={SignUp} exact />
        <Route path="/LoginT" component={LoginTemporary} exact />
        <Route path="/Admin" component={AdminPage} exact />
        <Route path="/AdminAddCompany" component={AdminFunctions1} exact />
        <Route path="/AdminUpdateCompany" component={AdminFunctions2} exact />
        <Route path="/AdminDeleteCompany" component={AdminFunctions3} exact />
        <Route path="/AdminGetAllCompanies" component={AdminFunctions4} exact />
        <Route path="/AdminGetOneCompany" component={AdminFunctions5} exact />
        <Route path="/AdminAddCustomer" component={AdminFunctions6} exact />
        <Route path="/AdminUpdateCustomer" component={AdminFunctions7} exact />
        <Route path="/AdminDeleteCustomer" component={AdminFunctions8} exact />
        <Route path="/AdminGetAllCustomers" component={AdminFunctions9} exact />
        <Route path="/AdminGetOneCustomer" component={AdminFunctions10} exact />
        <Route path="/Company" component={CompanyPage} exact />
        <Route path="/CompanyAddCoupon" component={CompanyFunctions1} exact />
        <Route
          path="/CompanyUpdateCoupon"
          component={CompanyFunctions2}
          exact
        />
        <Route
          path="/CompanyDeleteCoupon"
          component={CompanyFunctions3}
          exact
        />
        <Route
          path="/CompanyGetAllCoupons"
          component={CompanyFunctions4}
          exact
        />
        <Route
          path="/CompanyGetAllCouponsCategory"
          component={CompanyFunctions5}
          exact
        />
        <Route
          path="/CompanyGetAllCouponsPrice"
          component={CompanyFunctions6}
          exact
        />
        <Route path="/CompanyDetails" component={CompanyFunctions7} exact />
        <Route path="/Customer" component={CustomerPage} exact />
        <Route
          path="/CustomerFunctions1"
          component={CustomerFunctions1}
          exact
        />
        <Route
          path="/CustomerFunctions2"
          component={CustomerFunctions2}
          exact
        />
        <Route path="/CustomerDetails" component={CustomerDetails} exact />


        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default Routing;
