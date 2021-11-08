import "./FunctionSingleCompany.css";

interface FunctionSingleCompanyProps {
    id: number;
    name: string;
    email: string;
    password: string;
    coupons: string[];
}

function FunctionSingleCompany(props: FunctionSingleCompanyProps): JSX.Element {
    return (
        <div className="FunctionSingleCompany bigBox">
            <h1> Company info</h1><hr />
            id: {props.id}<br />
            name: {props.name}<br />
            email: {props.email}<br />
            password:{props.password}<br />
            coupons:{props.coupons}<br /><br />
        </div>
    );
}

export default FunctionSingleCompany;
