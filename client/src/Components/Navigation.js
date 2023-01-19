import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Action/Authaction";

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authreducer.client);
  const token = localStorage.getItem("token");

  return (
    <div>
      {user && token ? (
        <Navbar bg="warning" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Navbar
            </Navbar.Brand>
            <Nav className="me-auto" style={{ marginLeft: "65rem" }}>
              <Nav.Link as={Link} to="/add">
                Add
              </Nav.Link>
              <Nav.Link as={Link} to="/product">
                plant
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/login"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="warning" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto" style={{ marginLeft: "65rem" }}>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                register
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Navigation;
