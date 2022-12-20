import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

function Contact(){

    return(
        <div id="content">
            

            {/* <div className="spacer"></div> */}
            {/* <div className="spacer"></div> */}
            <div className="spacer"></div>

            <Row>
                <Col id="contact-col">
                    <h2>Want to get in touch?</h2>
                    <form>
                    <a href="mailto:cmsodwyer@gmail.com?subject=Message from Clare's Site&body=Hi Clare,">
                    <button id="contact-col-btn" type="button"> Contact Me</button>
                    </a>
                    </form>

                </Col>
            </Row>

            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>

        </div>
    )
}

export default Contact;



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
