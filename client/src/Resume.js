import React from "react";
import {Row, Col } from 'react-bootstrap';
import Reveal from 'react-reveal/Reveal';

// import React from 'react';
import Rotate from 'react-reveal/Rotate';

class Resume extends React.Component {
  render() {
    return (
        <div id="content">
        <Row>
        <Col id="left-project">
            <div class="title-card">
                <div class="title-card-inner" >
                <h1>Résumé</h1>
                </div>
            </div>
        </Col>
        <Col id="right-project">
            <img id="project-img" src="./images/beach.png" alt="portrait-img"/>
        </Col>
        </Row>

        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div id="note">
        <p> Inspired by my sister's work with the <a href="http://antiresume.org" target="blank">Anti-Résumé Project</a>, the theory behind my interactive résumé is that one page might cover accomplishments, awards, and 
        outcomes, but can't capture the joy, day to day experience, or lessons learned over months (or years!) spent with a team or project.
        Please enjoy my working attempt at an interactive résumé, with some of the added stories, color, and detail. </p>
        </div>

        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>

        <Row className="resume-row">
            <Col lg={2}></Col>
            <Col className="resume-item" lg={8}>
                <h3>Project Manager of MOE 365 FTC</h3><br/>
            </Col>
            <Col lg={2}></Col>

            <Col lg={2}>
            <div><br/><br/><br/>
                <Rotate top left delay={500}>
                    <p className="handwriting"> Starting as a rookie 8th grader to now being one of the veterans, I've learned a lot about mentorship, team culture, and passing on team values through example.</p><br/><br/>
                    {/* <p className="handwriting"> We looked at balancing delivery speed/customer satisfaction with efficient vehicle usage. </p> */}
                </Rotate>
            </div> 
            {/* <a className="resume-link" href="https://arxiv.org/abs/2109.05995" target="blank"> text </a> */}
            {/* <div className="tooltip"> hover <span className="tooltiptext handwriting"> text </span></div> */}
            </Col>
            <Col lg={5} sm={12}>
                <p>
                June 2018 - Present
                <br/><br/> <a className="resume-link" href="https://moeftc.org" target="blank">MOE 365 FTC</a> is a community-based FIRST Tech Challenge team in Wilmington, DE. 
                
                <br/><br/>
                • Lead 13 students to construct a robot, assemble an<a className="resume-link" href="https://moeftc.org/notebook" target="blank"> engineering portfolio</a>, and plan 10+ community outreach events each year.<br/>
                • Created team website and monthly newsletter, STEM in <div className="tooltip"> MOEtion. <span className="tooltiptext handwriting"> One of our better MOE puns, I won't subject you to any MOEre. </span></div><br/>
                • Secured $18,000 in sponsorship fundraising and in-kind donations.<br/>
                • <div className="tooltip">Filmed and directed <span className="tooltiptext handwriting"> I learned a lot from this process - generating the concept, actually filming it, collaborating to edit and get audio for it. Hugely rewarding! </span></div> 60-second <a className="resume-link" href="https://www.youtube.com/watch?v=zlkHS_VBdDk" target="blank"> Promote Video </a> which was named 1 of 3 FIRST World Finalists (2020).<br/>
                • Implemented application process to recruit new students which led to formation of <div className="tooltip"> new sister team. <span className="tooltiptext handwriting"> My proudest accomplishment on MOE - doubling the number of students who can be directly involved with our program.</span></div><br/>
                • Inspire Award, 1st Place Team in DE (2019, 2021).

                </p><br/><br/>
                <img class="resume-img" src="./images/moe-event.png" alt="Us at Hagley for Halloween 2021." />
            </Col>
            <Col lg={5} sm={12}>
                <img class="resume-img" src="./images/moe-team.jpg" alt="Team photo at Worlds 2019." />
                <img class="resume-img" src="./images/moe-bot.jpg" alt="Our 2020-2021 ULTIMATE GOAL robot." />
            </Col>
          
        </Row>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>

        <Row className="resume-row">
            <Col lg={2}></Col>
            <Col className="resume-item" lg={8}>
                <h3>Internship at University of Delaware's IDS Lab</h3><br/>
            </Col>
            <Col lg={2}> </Col>

            <Col lg={2}>
            <div><br/><br/><br/>
                <Rotate top left delay={500}>
                    <p className="handwriting"> Loved the experience, large team, and having the time and resources to work on a larger scale project! </p><br/><br/>
                    <p className="handwriting"> We looked at balancing delivery speed/customer satisfaction with efficient vehicle usage. </p>

                </Rotate>
            </div>
            </Col>
            <Col lg={5} sm={12}>
                <p>
                <div className="tooltip"> June 2021 - August 2021
                <span className="tooltiptext handwriting">Black Widow! Olympics! In the Heights!</span>
                </div> <br/><br/> Professor Andreas Malikopoulos’ <a className="resume-link" href="https://sites.udel.edu/ids-lab" target="blank">IDS Lab</a> in the University of Delaware's Department of Mechanical Engineering researches 
                complex cyber-physical systems, connected and automated vehicles, and shared mobility systems through the use of a <div className="tooltip"> 1:25 Scaled Smart City.
                <span className="tooltiptext handwriting">This was super cool - we could simulate traffic patterns, Uber routes, and even drive the model cars ourselves with a wheel and camera at driver-level! </span>
                </div> <br/><br/>
                • Joined <div className="tooltip">15-person team <span className="tooltiptext handwriting">Lots of projects happened at once - other people worked on car CAD, drone models, traffic pattern demos... </span></div> of students from many levels and locations. <br/>
                • Translated Scaled Smart City road network into a directed graph and designed low-cost pathfinding algorithms for a simulated delivery service. <br/>
                • Collaborated to submit <a className="resume-link" href="https://arxiv.org/abs/2109.05995" target="blank">a paper</a> on research findings and validation using the Scaled Smart City and cars.
                {/* <div className="tooltip"> Hover over me 
                <span className="tooltiptext handwriting">Hello again! This is a little fun box. I think it looks really cool. Thanks Olivia!</span>
                </div> here. */}
                </p>
                    <img class="resume-img" src="./images/ids-figure.png" alt="Final project poster from my work during summer 2021." />

            </Col>
            <Col lg={5} sm={12}>
                <img class="resume-img" src="./images/ids-image.jpg" alt="Team photo in the lab." /><br/><br/>
                <img class="resume-img" src="./images/ids-poster.png" alt="A figure from our submitted paper." />
            </Col>
        </Row>
        
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>

    </div>

    );
  }
}

export default Resume;

