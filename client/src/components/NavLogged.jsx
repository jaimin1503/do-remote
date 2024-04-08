import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import notificationLogo from "./assets/notification.svg";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setuser } from "../reducers/userReducer";

const NavLogged = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleClickedOutside = (e) => {
      if (e.target.id !== "profile") {
        setIsOpened(false);
      }
    };
    document.addEventListener("click", handleClickedOutside);
    return () => {
      document.removeEventListener("click", handleClickedOutside);
    };
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/getUser`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setuser(res.data.user));
        console.log("fetched user data");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  if (user?.role === "freelancer") {
    return (
      <>
        <Navbar className=" border-b" expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              <h1 className="text-2xl font-bold">DO-REMOTE</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" items-center">
                <NavDropdown title="Find-work" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/dev">
                    Find-work
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/design">
                    Saved jobs
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/design">
                    proposals
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/dev">
                  All Contracts
                </Nav.Link>
                <Nav.Link as={Link} to="/design">
                  Messages
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto items-center">
                <Nav.Link>
                  <img src={notificationLogo} alt="notification" />
                </Nav.Link>
                <Nav.Link>
                  <img
                    className=" h-7 w-7 rounded-full object-cover "
                    src={user?.profile?.profilePicture}
                    alt="img"
                    id="profile"
                    onClick={() => setIsOpened(!isOpened)}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className=" float-right m-2">
          {isOpened && (
            <ProfileCard
              photo={user?.profile?.profilePicture}
              username={user?.username}
              role={user?.role}
              id={user?._id}
            />
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar className=" border-b" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <h1 className="text-2xl font-bold">DO-REMOTE</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" items-center">
                <NavDropdown title="Find-Talent" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/dev">
                    Find Talent
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/design">
                    Saved Profiles
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/design">
                    proposals
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/dev">
                  My jobs
                </Nav.Link>
                <Nav.Link as={Link} to="/design">
                  Messages
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto items-center">
                <Nav.Link>
                  <img src={notificationLogo} alt="notification" />
                </Nav.Link>
                <Nav.Link>
                  <img
                    className=" h-7 w-7 rounded-full object-cover "
                    src={user?.profile?.profilePicture}
                    alt="img"
                    id="profile"
                    onClick={() => setIsOpened(!isOpened)}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {isOpened && (
          <div className=" absolute right-0 m-2">
            <ProfileCard
              photo={user?.profile?.profilePicture}
              username={user?.username}
              role={user?.role}
              id={user?._id}
            />
          </div>
        )}
      </>
    );
  }
};
export default NavLogged;
