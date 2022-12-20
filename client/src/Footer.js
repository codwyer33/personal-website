import React from 'react';
import {Row, Col } from 'react-bootstrap';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Footer(){
    return(
        <div id="footer">
            <Row>
                <Col id="footer-left" lg={6} sm={12}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>

                </Col>
                <Col id="footer-right" lg={6} sm={12}>
                  <p>Made with   💙  by Clare O'Dwyer</p><br/>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
