import "./FunctionSingleCustomer.css";

interface FunctionSingleCustomerProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    
}

function FunctionSingleCustomer(props: FunctionSingleCustomerProps): JSX.Element {
    return (
        <div className="FunctionSingleCustomer bigBox">
            <h1>Customer info</h1>
            id: {props.id}<br />
            First name: {props.firstName}<br />
            Last name : {props.lastName}<br />
            Email : {props.email}<br />
            Password: {props.password}<br />
           
        </div>
    );
}

export default FunctionSingleCustomer;
