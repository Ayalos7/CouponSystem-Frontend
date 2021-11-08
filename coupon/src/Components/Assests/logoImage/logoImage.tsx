import "./logoImage.css";
import logo from "../../Assests/Logo.png";

function LogoImage(): JSX.Element {
    return (
        <div className="logoImage">
			<img className="photo" height='5%' width="140" src={logo}/>
            
        </div>
    );
}

export default LogoImage;
