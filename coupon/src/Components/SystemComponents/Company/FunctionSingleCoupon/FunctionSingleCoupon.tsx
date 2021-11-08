import "./FunctionSingleCoupon.css";

interface FunctionSingleCouponProps {
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


function FunctionSingleCoupon(props: FunctionSingleCouponProps): JSX.Element {
    function showMessage() {

    }
    const size = 100;
    return (
        <div className="ImgProps bigBox5">
            <img src={props.image} width={size} height={size} /> <br/>
			
            id: {props.id}<br />
            companyId: {props.companyID}<br />
            category: {props.category}<br />
            title:{props.title}<br />
            description:{props.description}<br />
            start date: {props.startDate}<br />
            end date: {props.endDate}<br />
            amount:{props.amount}<br />
            price: {props.price}<br />
            
            
     </div>
    );
}

export default FunctionSingleCoupon;
