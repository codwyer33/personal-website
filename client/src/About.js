import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

function About(){

    return(
        <div id="content">
            <Row>
                <Col id="left-2" lg={6}>
                    <FingerprintIcon id="left-2-img"/>
                </Col>
                <Col id="right-2" lg={6}>
                    <h2>I'm Clare.</h2> <br/>
                    <p> I'm an aspiring programmer, writer, runner, and artist from Delaware. I like learning new things and making stuff, from books to board games to bread.  </p>
                </Col>

            </Row>

            {/* <div className="spacer"></div> */}
            {/* <div className="spacer"></div> */}
            
            <div id="gallery">
            <h3>Some fun moments...</h3> <br/>
           <Row class="center-row">
                <Col lg={1}></Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/rock-stack.JPG" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/black-beach.jpg" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/tree.JPG" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/basketball-court.JPG" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/flag.JPG" alt="-img" />
               </Col>
               <Col lg={1}></Col>
               <Col lg={1}></Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/first.JPG" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/blurry-road.jpg" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/trees.png" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/crater.JPG" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/moe-worlds.JPG" alt="-img" />
               </Col>
               <Col lg={1}></Col>
               <Col lg={1}></Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/church.JPG" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/airplane-wing.jpg" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/cubes.jpg" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/iceland-down.JPG" alt="-img" />
               </Col>
               <Col lg={2}>
                    <img class="gal-img" src="./images/baseball-field.JPG" alt="-img" />
               </Col>
               <Col lg={1}></Col>

           </Row>
           </div>
           <div className="spacer"></div>
           <div className="spacer"></div>

           {/* <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/49175705/latest-rides/483f049d0d253426ff24fe5a93620f5b8642b41f'></iframe> */}
           <div className="spacer"></div>
           <div className="spacer"></div>           
           <div className="spacer"></div>
           <div className="spacer"></div>          

           {/* <Row>
                <Col id="left-3">
                    <div class="title-card">
                        <div class="title-card-inner" >
                         <h1>About</h1>
                         </div>
                    </div>
                </Col>
                <Col id="right-3">
                    <img id="about-img"src="./images/portrait.png" alt="portrait-img"/>
                </Col>
            </Row>

            <div className="spacer"></div>
            <h3>A record of some of my favorite things (roughly chronological)</h3>
            <p>Pirates of the Carribean(very briefly) Roosevelt(my sunglasses)  Agents of S.H.I.E.L.D.  Marvel  Clone Wars season 7(the best Star Wars since Rogue One)  React eventhooks  Downton Abbey  Iceland  Rubik's cubes  The Book Thief  Board/card games  Harry Potter</p>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div> */}

            {/* <Row>
                <Col id="left-project">
                    <div class="title-card">
                        <div class="title-card-inner" >
                         <h1>Projects</h1>
                         </div>
                    </div>
                </Col>
                <Col id="right-project">
                    <img id="project-img" src="./images/projects.png" alt="portrait-img"/>
                </Col>
            </Row>

            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>

            <Row>
                <Col className="project-left" lg={6} sm={12}>
                    <a href="https://to-do-list-codwyer.herokuapp.com" target="blank"><img class="project-img" src="./images/todo-list.png" alt="todo-list-img" /></a>
                </Col>
                <Col className="project-right" lg={6} sm={12}>
                    <hr></hr><br/>
                    <h3>To-Do List Web App</h3> <br/>
                    <p> A simple project I made through a Web Development course to display the current date and store user task inputs. Afterward, I modified the styling features and added a delete action.<br/><br/> Tools used: HTML, CSS, Express.js, JavaScript, Node.js</p><br/>
                    <a href="https://to-do-list-codwyer.herokuapp.com" target="blank"><button type="button">View</button></a>
                    <br/><br/><hr></hr>
               </Col>
            </Row>

            <div className="spacer"></div>
            <div className="spacer"></div>

            <Row>
                <Col className="project-left" lg={6} sm={12}>
                    <a href="http://www.offlocust.com/" target="blank"><img class="project-img" src="./images/off-locust.png" alt="todo-list-img" /></a>
                </Col>
                <Col className="project-right" lg={6} sm={12}>
                    <hr></hr><br/>
                    <h3>Off Locust Website</h3> <br/>
                    <p> A website <a>my sister Olivia</a> and I designed and created for a Penn student-run publication. <br/><br/>Tools used: HTML, CSS, Express, EJS, JS, Node, Bcrypt, MongoDB, Canva, Bootstrap, Mailchimp API</p><br/>
                    <a href="http://www.offlocust.com/" target="blank"><button type="button">View</button></a>
                    <br/><br/><hr></hr>
               </Col>
            </Row>

            <div className="spacer"></div>
            <div className="spacer"></div>

            <Row>
                <Col className="project-left" lg={6} sm={12}>
                    <img class="project-img" src="./images/apollo_match.png" alt="todo-list-img" />
                </Col>
                <Col className="project-right" lg={6} sm={12}>
                    <hr></hr><br/>
                    <h3>Apollo: YIM Sites</h3> <br/>
                    <p> A series of projects I made as a part of <a href="https://www.apolloprogram.org/" target="blank">Apollo: Youth In Medicine's</a> student leadership team to match high school students with hundreds of physician shadowing times, pull data from Google Sheets, export and grade applications, and send out individualized mass emails. <br/><br/>Tools used: HTML, CSS, Express, EJS, Node, MongoDB Realm/Atlas, Bootstrap, Nodemailer, Bcrypt, Google Sheets Script Editor</p><br/>
                    <hr></hr>
               </Col>
            </Row>

            <div className="spacer"></div>
            <div className="spacer"></div>

            <Row>
                <Col className="project-left" lg={6} sm={12}>
                    <img class="project-img" src="./images/tweet-graphs.png" alt="todo-list-img" />
                </Col>
                <Col className="project-right" lg={6} sm={12}>
                    <hr></hr><br/>
                    <h3>Tweet Classification Using AI</h3> <br/>
                    <p> A team project completed over 3 weeks at Stanford's <a href="https://ai-4-all.org" target="blank">AI4ALL</a> 2020 summer camp to classify tweets from past natural disasters into categories like food, water, and medical. We used 6 different approaches and evaluated them using metrics like accuracy, precision, recall, and F1 score. <br/><br/>Tools used: Python, various Python modules, various NLP algorithms, data cleaning techniques, Google Collab</p><br/>
                    <hr></hr>
               </Col>
            </Row> */}

            {/* <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>

            <Row>
                <Col id="contact-col">
                    <h2>Want to get in touch?</h2>
                    <form>
                    <a href="mailto:cmsodwyer@gmail.com">
                    <button id="contact-col-btn" type="button"> Contact Me</button>
                    </a>
                    </form>

                </Col>
            </Row> */}

            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>

        </div>
    )
}

export default About;



// Scroll stuff
    // const isBrowser = typeof window !== `undefined`
    // function getScrollPosition({ element, useWindow }) {
    //     if (!isBrowser) return { x: 0, y: 0 }

    //     const target = element ? element.current : document.body
    //     const position = target.getBoundingClientRect()

    //     return useWindow
    //       ? { x: window.scrollX, y: window.scrollY }
    //       : { x: position.left, y: position.top }
    //   }

    //   export function useScrollPosition(effect, deps, element, useWindow, wait) {
    //     const position = useRef(getScrollPosition({ useWindow }))

    //     let throttleTimeout = null

    //     const callBack = () => {
    //       const currPos = getScrollPosition({ element, useWindow })
    //       effect({ prevPos: position.current, currPos })
    //       position.current = currPos
    //       throttleTimeout = null
    //     }

    //     useLayoutEffect(() => {
    //       const handleScroll = () => {
    //         if (wait) {
    //           if (throttleTimeout === null) {
    //             throttleTimeout = setTimeout(callBack, wait)
    //           }
    //         } else {
    //           callBack()
    //         }
    //       }

    //       window.addEventListener('scroll', handleScroll)

    //       return () => window.removeEventListener('scroll', handleScroll)
    //     }, deps)
    //   }
