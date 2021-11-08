import { SyntheticEvent } from "react";
import "./ImgProps2.css";

interface ItemProps {
    img: string;  //our image to be displayed
    title: string; //our title
}

function ImgProps2(props: ItemProps): JSX.Element {
    const size = 70;

    function showMessage(args: SyntheticEvent) {
        alert("You bought a new copon");
        console.log(args);
    }

    return (
        <div className="ImgProps bigBox">
            <img src={props.img} width={size} height={size} />
            <br/>
            <span>{props.title}</span><br /><br /> <br/> <br/>
            <input type="button" value="purchase" onClick={showMessage} />
        </div>
    );
}

export default ImgProps2;
