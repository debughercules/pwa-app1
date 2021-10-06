import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";


const Navigation = () => {
    return ( 
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"> Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link>
        <Link to="/" >Home</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/users" >Users</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/about" >About</Link>
      </Nav.Link>
    </Nav>
  </Navbar> );
}
 
export default Navigation;