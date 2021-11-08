import "./MainWallPaper.css";
import gray3 from "../../Assests/gray3.jpg"

function MainWallPaper(): JSX.Element {
    return (
        <div className="MainWallPaper">
			<img className="photoB" src={gray3}/>
        </div>
    );
}

export default MainWallPaper;
