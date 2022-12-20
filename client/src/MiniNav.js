import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MiniNav(){
    return(
        <div>
            <div className="miniNav">
                <h3> <a id="miniNav-clicked">ABOUT</a> </h3>
                <h3> <a href="">PROJECTS</a> </h3>
                <h3> <a href="">RESUME</a> </h3>
                <h3> <a href="">CONTACT</a> </h3>

            </div>

            <div className="spacer"></div>
            {/* <div className="spacer"></div> */}

        </div>

    );
}

export default MiniNav;

// scrolling dark expand="md"
