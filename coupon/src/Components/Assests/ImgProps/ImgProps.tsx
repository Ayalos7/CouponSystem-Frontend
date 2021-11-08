// import { Button } from "@material-ui/core";
import { SyntheticEvent } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import "./ImgProps.css";
interface ItemProps {
  img: string; //our image to be displayed
  title: string; //our title
}

function ImgProps(props: ItemProps): JSX.Element {
  const size = 110;
  const history = useHistory();

  function redirectTo(args: SyntheticEvent) {
    history.push("/AvailableCoupons" + props.title);
  }

  return (
    <div className=" cursor-pointer transform hover:scale-105 transition duration-150 ease-out m-3 sm:m-0">
      <a onClick={redirectTo}>
        <div className=" bg-green-400 p-3 sm:p-5 rounded-xl sm:h-50 sm:w-52 shadow-lg ">
          <img src={props.img} className="h-32  mx-auto" />
          <p className="pt-2 font-semibold text-lg text-white">
            {" "}
            {props.title}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ImgProps;
