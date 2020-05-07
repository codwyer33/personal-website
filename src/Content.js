import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

function Content(){

    return(
        <div id="content">
            <Row >
                <Col lg={4}>
                    <img id="intro-img" src="/images/waterfall.png" alt="waterfall-img"/>
                </Col>
                <Col lg={2}>
                    <div id="into-top-bar"></div>
                    <h1 id="intro-text">Welcome.</h1>
                    <div id="intro-btm-bar"></div>
                </Col>
                <Col lg={6}>
                    <img id="intro-img-2" src="./images/glacier.png" alt="glacier-img"></img>
                </Col>
            </Row>
            <div className="spacer"></div>
            <div className="spacer"></div>
            {/* <div className="spacer"></div> */}

            <Row>
                <Col id="left-2" lg={6}>
                    <FingerprintIcon id="left-2-img"/>
                </Col>
                <Col id="right-2" lg={6}>
                    <h2>I'm Clare O'Dwyer.</h2> <br/>
                    <p> I'm an aspiring programmer, writer, runner, and artist from Delaware. I like learning new things and making stuff, from books to board games to bread.  </p>
                </Col>

            </Row>
            {/* <div className="spacer"></div> */}
            <div className="spacer"></div>
            
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
                    <img class="gal-img" src="./images/amazing.jpg" alt="-img" />
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
           <div className="spacer"></div>
           <div className="spacer"></div>

           <Row>
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
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <Row>
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
                    <p> A project I made through a Web Development course. Afterward, I added different styling features and a delete action. This used HTML, CSS, Express.js, JavaScript, and Node.js.</p><br/>
                    <a href="https://to-do-list-codwyer.herokuapp.com" target="blank"><button type="button">View</button></a>
                    <br/><br/><hr></hr>
               </Col>
            </Row>

            <div className="spacer"></div>
            <div className="spacer"></div>
            <Row>
                <Col className="project-left" lg={6} sm={12}>
                    <a href="https://to-do-list-codwyer.herokuapp.com" target="blank"><img class="project-img" src="./images/todo-list.png" alt="todo-list-img" /></a>
                </Col>
                <Col className="project-right" lg={6} sm={12}>
                    <hr></hr><br/>
                    <h3>To-Do List Web App</h3> <br/>
                    <p> A project I made through a Web Development course. Afterward, I added different styling features and a delete action. This used HTML, CSS, Express.js, JavaScript, and Node.js.</p><br/>
                    <a href="https://to-do-list-codwyer.herokuapp.com" target="blank"><button type="button">View</button></a>
                    <br/><br/><hr></hr>
               </Col>
            </Row>

            <div className="spacer"></div>
            <div className="spacer"></div>
            <Row>
                <Col className="project-left" lg={6} sm={12}>
                    <a href="https://to-do-list-codwyer.herokuapp.com" target="blank"><img class="project-img" src="./images/todo-list.png" alt="todo-list-img" /></a>
                </Col>
                <Col className="project-right" lg={6} sm={12}>
                    <hr></hr><br/>
                    <h3>To-Do List Web App</h3> <br/>
                    <p> A project I made through a Web Development course. Afterward, I added different styling features and a delete action. This used HTML, CSS, Express.js, JavaScript, and Node.js.</p><br/>
                    <a href="https://to-do-list-codwyer.herokuapp.com" target="blank"><button type="button">View</button></a>
                    <br/><br/><hr></hr>
               </Col>
            </Row>

            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <Row>
                <Col id="contact-col">
                    <h2>Want to get in touch?</h2>
                    <button id="contact-col-btn" type="button"> Contact Me</button>
                </Col>
            </Row>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>

        </div>
    )
}

export default Content;



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