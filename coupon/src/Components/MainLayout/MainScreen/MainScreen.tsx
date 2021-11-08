import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import MainImg from "../../Assests/MainImg/MainImg";
import "./MainScreen.css";
import * as React from "react";
import { useForm } from "react-hook-form";
import MainWallPaper from "../../Assests/MainWallPaper/MainWallPaper";
import ImgProps from "../../Assests/ImgProps/ImgProps";
import { useEffect, useState } from "react";
import { ConstructionRounded } from "@mui/icons-material";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

interface MainScreenState {
  showcaseNum: number;
}

function MainScreen(): JSX.Element {
  const [showcaseNum, setData] = useState([]);

  useEffect(() => {
    setData(showcaseNum);
  });

  function function1() {
    console.log("hi");
    console.log(showcaseNum);
  }
  function function2() {
    console.log("hi");
  }
  function function3() {
    console.log("hi");
  }

  const coupPics = [
    {
      id: 1,
      name: "Ice Cream",
      img: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/soft-ice-cream.png",
    },
    {
      id: 2,
      name: "Bread",
      img: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/9/9f/Baked_Bread_Loaf_%28Primitive_Plus%29.png/revision/latest?cb=20160822074158",
    },
    {
      id: 3,
      name: "Apple",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Apple_icon_1.png",
    },
    {
      id: 4,
      name: "Hamburger",
      img: "https://i.pinimg.com/originals/72/48/42/7248425f5ad460457ff8181332225036.png",
    },
    {
      id: 5,
      name: "Vacation",
      img: "https://www.pngfind.com/mpng/mJxbRb_washing-machine-png-image-samsung-top-loading-washer/.png",
    },
    {
      id: 6,
      name: "Ice Cream",
      img: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/soft-ice-cream.png",
    },
    {
      id: 7,
      name: "Bread",
      img: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/9/9f/Baked_Bread_Loaf_%28Primitive_Plus%29.png/revision/latest?cb=20160822074158",
    },
  ];

  return (
    <div className="MainScreen">
      <div className="MainUp">
        <div className="MainLeft">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
