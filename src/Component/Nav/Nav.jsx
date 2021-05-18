import React from 'react';
import '../../CSS/Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className = "App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Movie</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Checkout</Nav.Link>  
    </Nav>
    <div class="col">
    <Nav className="justify-content-end" >
    
      <Nav.Link href = "/" >Home </Nav.Link>
      
      
      <Nav.Link href= "/Favourite">Favourite</Nav.Link>
     
    </Nav>
    </div>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default App;


// import {Link} from 'react-router-dom';
// import '../../CSS/Nav.css'
// function Nav() {
//     const navStyle = {
//         color: "white"
//     }

//   return (
//     <nav className="nav">
//         <h1>Movie</h1>
//         <p>Checkout</p>
//         <ul className = "nav-links">
//         <Link to= "/">
//            <li className="navStyle">HomePage</li>
//            </Link>
            
//             <Link to= "/Favourite">
//             <li className="navStyle">Favourite</li>
//             </Link>
            
//         </ul>
       
//     </nav>
//   );
// }


