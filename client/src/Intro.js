import React from 'react';
import {Row, Col } from 'react-bootstrap';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

function Intro(){
    return(
      <div id="content">
          <Row >
              <Col lg={4}>
                  <img id="intro-img" src="/images/waterfall.png" alt="waterfall-img"/>
              </Col>
              <Col lg={2}>
                  <div id="into-top-bar"></div>
                  <h1 id="intro-text">Welcome</h1>
                  <div id="intro-btm-bar"></div>
              </Col>
              <Col lg={6}>
                  <img id="intro-img-2" src="./images/glacier.png" alt="glacier-img"></img>
              </Col>
          </Row>
          <div className="spacer"></div>
          <div className="spacer"></div>
          {/* <div className="spacer"></div>
          <Row>
              <Col id="left-2" lg={6}>
                  <FingerprintIcon id="left-2-img"/>
              </Col>
              <Col id="right-2" lg={6}>
                  <h2>I'm Clare.</h2> <br/>
                  <p> I'm an aspiring programmer, writer, runner, and artist from Delaware. I like learning new things and making stuff, from books to board games to bread.  </p>
              </Col>

          </Row> */}
      </div>
    );
}

export default Intro;
