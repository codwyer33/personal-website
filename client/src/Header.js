import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header(){
    return(
        <div>
        <div id="header">
        <Navbar  variant="dark" fixed>
            <Navbar.Brand href="#home">
                <img id="logo-img"src="./images/logo.png" alt="logo-img"/>
            </Navbar.Brand>
            <Navbar.Brand>
                <h3>Clare's Site</h3>
            </Navbar.Brand>
           
            {/* <Nav id="navLinks" className="ml-auto">
                <Nav.Link className="navLink" href="#left-2">Home</Nav.Link>
                <Nav.Link className="navLink" href="#left-3">About</Nav.Link>
                <Nav.Link className="navLink" href="#left-project">Projects</Nav.Link>
                <Nav.Link className="navLink" href="#contact-col">Contact</Nav.Link>
            </Nav> */}
        </Navbar>
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>

        </div>

    );
}

export default Header;

// scrolling dark expand="md"
