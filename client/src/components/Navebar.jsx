import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

const Navebar = () => {
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
              <Link className=" mx-2 cursor-pointer" to="development">
                Development & IT
              </Link>
              <Link className=" mx-2 cursor-pointer" to="design">
                Design & Creative
              </Link>
              <Link className=" mx-2 cursor-pointer" to="aids">
                AI and Data Science
              </Link>
            </Nav>
            <Nav className="ml-auto items-center">
              <Nav.Link className=" float-right" as={Link} to="/">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/welcome">
                <button className=" bg-blue-500 rounded-full py-2 px-4 text-white hover:bg-blue-600">
                  <span>Sign Up</span>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navebar;
