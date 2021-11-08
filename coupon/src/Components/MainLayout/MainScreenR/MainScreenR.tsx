import { Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import ImgProps from "../../Assests/ImgProps/ImgProps";
import "./MainScreenR.css";
import myImage from "../../Assests/gray3.jpg";
import Gimage from "../../Assests/gifts.png";
interface MainScreenRState {
  title: string;
  myImage: string;
}

class MainScreenR extends Component<{}, MainScreenRState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      title: "",
      myImage: "",
    };
  }
  private function1(lsl: string) {
    return "";
  }
  private function2 = () => {
    this.setState({ title: "2" });
  };
  private function3 = () => {
    this.setState({ title: "3" });
  };

  public coupPics = [
    {
      id: 1,
      name: "Vacation",
      img: "https://backendlessappcontent.com/E97C0748-D36F-035C-FFC0-4FB516E81300/console/ztiiwzqhxxdjzlyizenqrvmdbzyxdbeunmww/files/view/travelMainPage.png",
    },
    {
      id: 2,
      name: "Food",
      img: "https://backendlessappcontent.com/E97C0748-D36F-035C-FFC0-4FB516E81300/console/ztiiwzqhxxdjzlyizenqrvmdbzyxdbeunmww/files/view/FoodMainPage.png",
    },
    {
      id: 3,
      name: "Electricity",
      img: "https://backendlessappcontent.com/E97C0748-D36F-035C-FFC0-4FB516E81300/console/ztiiwzqhxxdjzlyizenqrvmdbzyxdbeunmww/files/view/ElectricMainPage.png",
    },
    {
      id: 4,
      name: "Clothing",
      img: "https://backendlessappcontent.com/E97C0748-D36F-035C-FFC0-4FB516E81300/console/ztiiwzqhxxdjzlyizenqrvmdbzyxdbeunmww/files/view/ClothingMainPage.png",
    },
    {
      id: 5,
      name: "Fitness",
      img: "https://backendlessappcontent.com/E97C0748-D36F-035C-FFC0-4FB516E81300/console/ztiiwzqhxxdjzlyizenqrvmdbzyxdbeunmww/files/view/HealthMainPage.png",
    },
  ];

  public render(): JSX.Element {
    return (
      <div className="MainScreen bg-white">
        <div className="MainUp flex items-center flex-col sm:flex-row content-around sm:text-left px-10 sm:px-20 bg-purple-500">
          <div className="flex  justify-between order-last sm:order-first">
            <div className="flex-grow ">
              <h1 className="font-bold text-2xl sm:text-4xl mb-8 text-white">
                {" "}
                Coupons For Every Occasion! <br /> All Available Now In Site.
              </h1>

              <NavLink
                className="text-lg bg-white px-3 py-2  text-gray-900 font-bold  rounded-md  hover:shadow-xl transform hover:scale-105 transition animate-pulse"
                exact
                to="/AvailableCoupons"
              >
                {" "}
                View Coupons{" "}
              </NavLink>
            </div>
            {/* <img className="" src={this.state.myImage}></img> */}
          </div>
          <img
            src={Gimage}
            alt=""
            className=" h-1/2 sm:h-5/6 order-1 mr-0 sm:ml-auto"
          />
        </div>
        <div className="MainDown py-5">
          <br />
          <h2 className="font-bold text-gray-900 text-3xl">
            Explore Our Categories:
          </h2>
          <div className=" max-w-screen-xl mx-auto py-10">
            <br />
            <span> {this.state.title} </span>
            <br />
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:g">
              {this.coupPics.map((item) => (
                <ImgProps img={item.img} title={item.name} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 max-w-sm  sm:max-w-screen-lg  mx-auto grid grid-cols-1 sm:grid-cols-2 sm:space-x-8 text-white mb-10">
          <div className="py-10 px-10 bg-purple-400   rounded-xl cursor-pointer mb-5 sm:mb-0">
            <h3 className="font-bold text-lg  mb-6">Why Coupon Master?</h3>
            <ul className="mb-6 text-left list-disc">
              <li className="mb-2">Coupons up to 75% discount.</li>
              <li className="mb-2">Various categories</li>
              <li className="mb-2">New coupons every week</li>
            </ul>
            <h3 className="font-semibold mb-5">Not a member?</h3>
            <NavLink
              exact
              to="/SignUp"
              className="text-gray-900 bg-white rounded-md shadow-lg p-2 px-4"
            >
              {" "}
              Sign Up
            </NavLink>
          </div>
          <div className="py-10 px-10 max-w-sm  sm:max-w-screen-lg bg-purple-400   mx-auto rounded-xl cursor-pointer ">
            <h3 className="font-bold text-lg  mb-6">
              Looking For A Site To Sell Coupons?
            </h3>
            <ul className="mb-6 text-left list-disc">
              <li className="mb-2">Start Working With Coupon Master!</li>
              <li className="mb-2">Create an account as a company</li>
              <li className="mb-2">Post coupons in any category</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainScreenR;
