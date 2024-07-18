import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavebar from "./ResponsiveNavebar";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

const Navebar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Navbar className=" border-b" expand="lg">
        <Container>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <ResponsiveNavebar toggleDrawer={toggleDrawer} />
          </Drawer>
          <Navbar.Brand href="/home">
            <h1 className="text-2xl font-bold">DO-REMOTE</h1>
          </Navbar.Brand>
          <div
            onClick={toggleDrawer(true)}
            className=" cursor-pointer lg:hidden "
          >w
            <FormatAlignRightIcon />
          </div>
          <Nav className=" items-center hidden lg:flex">
            <Link className=" mx-2 cursor-pointer" to="development">
              Development & IT
            </Link>
            <Link className=" mx-2 cursor-pointer" to="aids">
              Design & Creative
            </Link>
            <Link className=" mx-2 cursor-pointer" to="aids">
              AI and Data Science
            </Link>
          </Nav>
          <Nav className="ml-auto items-center hidden lg:flex">
            <a className=" float-right mr-5" href="/">
              Login
            </a>
            <a href="/welcome">
              <button className=" bg-blue-500 rounded-full py-2 px-4 text-white hover:bg-blue-600">
                <span>Sign Up</span>
              </button>
            </a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Navebar;
