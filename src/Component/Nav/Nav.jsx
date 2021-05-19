import React from "react";
import "../../CSS/Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Checkout</Nav.Link>
          </Nav>
          <div class="col">
            <Nav className="justify-content-end">
              <Nav.Link href="/">Home </Nav.Link>

              <Nav.Link href="/Favourite">Favourite</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;

