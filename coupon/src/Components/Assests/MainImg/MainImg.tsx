import "./MainImg.css";
import MainScreenImg from "../../Assests/MainScreenImg.png";

function MainImg(): JSX.Element {
    return (
        <div className="MainImg">
			<img src={MainScreenImg} />
        </div>
    );
}

export default MainImg;
