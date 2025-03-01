import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaHome, FaShoppingCart, FaUserCircle } from "react-icons/fa";

function FoodDeliveryNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to style active links
  const getNavLinkStyle = (path) => {
    return location.pathname === path
      ? { textDecoration: "underline", color: "#fff" }
      : { color: "#bbb" };
  };

  return (
    <Navbar bg="danger" expand="sm" variant="dark" className="custom-navbar">
      <Navbar.Brand className="txt">FoodieExpress</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        {/* Aligning Nav items to the right */}
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link onClick={() => navigate("/home")} style={getNavLinkStyle("/home")}>
              <FaHome /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate("/table")} style={getNavLinkStyle("/table")}>
              <FaShoppingCart /> Table
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate("/upload")} style={getNavLinkStyle("/upload")}>
              <FaUserCircle /> Upload
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FoodDeliveryNavbar;
