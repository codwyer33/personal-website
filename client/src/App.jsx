// import React from 'react';
import Header from "./Header";
import About from "./About";
import Intro from "./Intro";
import Contact from "./Contact";
import Blog from "./Blog.jsx";
import Projects from "./Projects";
import Resume from "./Resume";
import Admin from "./Admin.jsx";

import {Row, Col } from 'react-bootstrap';

import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link
} from "react-router-dom";


let blogData = [
    {
      index:3,
      title:"Kate Bishop and Marvel's Female Heroes",
      text:"A personal favorite project of \n\nmine with guidance from AI4ALL's \nPortfolio Project Summer Program. I used Lahman's Baseball Dataset and built many version of a linear regression model to predict MLB team win's using past year's stats.",
      date: "1 Jan 2022",
      selected:true
    },
    {
      index:2,
      title:"Yelena, Hawkeye's Tone, and Permission to be Serious",
      text:"A personal favorite project of mine with guidance from AI4ALL's Portfolio Project Summer Program. I used Lahman's Baseball Dataset and built many version of a linear regression model to predict MLB team win's using past year's stats.",
      date: "1 Feb 2022",
      selected:false
    },
    {
        index:1,
        title:"Eternals, WandaVision, and Marvel's New Feminism",
        text:"A personal favorite project of mine with guidance from AI4ALL's Portfolio Project Summer Program. I used Lahman's Baseball Dataset and built many version of a linear regression model to predict MLB team win's using past year's stats.",
        date: "1 Mar 2022",
        selected:false
    },
    {
      index:0,
      title:"Dickinson and the Utility of Weirdness",
      text:"A personal favorite project of mine with guidance from AI4ALL's Portfolio Project Summer Program. I used Lahman's Baseball Dataset and built many version of a linear regression model to predict MLB team win's using past year's stats.",
      date: "1 Apr 2022",
      selected:false
    }
  ];

export default function App() {
    const [blogs, setBlogs] = React.useState(blogData);

    function handleBlogClick(event){
        let clickedBlogIndex = event.target.name;
        let thisBlog;
        for(let i =0; i< blogs.length; i++){
            if(blogs[i].index == clickedBlogIndex){
                thisBlog = blogs[i];
            }
        }
        setBlogs(() => {
            let newArray = [];
            for(let i=0; i<blogs.length; i++){
                console.log(blogs[i].index);
                if(blogs[i].index != clickedBlogIndex){
                    console.log("NOT YOU");
                    newArray.push({index:blogs[i].index, title:blogs[i].title, text:blogs[i].text, date:blogs[i].date, selected:false})
                } else {
                    newArray.push({index:blogs[i].index, title:blogs[i].title, text:blogs[i].text, date:blogs[i].date, selected:true})
                }
            }
            return newArray;
        });
        console.log('clicked: '+clickedBlogIndex);
        event.preventDefault();
    }
    
    function handleAdminSubmit(event){
        
    }

    function AboutPage() {
        return (
          <div>
              <div id="main">
                  <About />
              </div>
          </div>
        )
      }
      
    function ProjectsPage() {
        return (
            <div>
                <div id="main">
                    <Projects />
                </div>
            </div>
    )}
      
    function ContactPage() {
        return (
            <div>
                <div id="main">
                    <Contact />
                </div>
            </div>
    )}
      
    function ResumePage() {
    return (
        <div>
            <div id="main">
                <Resume />
            </div>
        </div>
    )}
      
    function BlogPage() {
        return (
            <div>
                <div id="main">
                    <Blog 
                        handleBlogClick = {handleBlogClick}
                        blogs = {blogs}
                    />
                </div>
            </div>
    )}
    function AdminPage() {
        return (
            <div>
                <div id="main">
                    <Admin 
                        handleAdminSubmit = {handleAdminSubmit}
                        blogs = {blogs}
                    />
                </div>
            </div>
    )}

  return (
    <Router>
        <div>
            <Header />
            {/* <Intro /> */}
            <div className="miniNav">
                <NavLink exact to="/" activeClassName="selected"><h3>ABOUT</h3></NavLink>
                <NavLink to="/projects" activeClassName="selected"><h3>PROJECTS</h3></NavLink>
                <NavLink to="/resume" activeClassName="selected"><h3>RÉSUMÉ</h3></NavLink>
                <NavLink to="/blog" activeClassName="selected"><h3>BLOG</h3></NavLink>
                <NavLink to="/contact" activeClassName="selected"><h3>CONTACT</h3></NavLink>

            </div>

            <div className="spacer"></div>
            <div className="spacer"></div>
            <Switch>
            <Route path="/projects">
                <ProjectsPage />
            </Route>
            <Route path="/contact">
                <ContactPage />
            </Route>
            <Route path="/resume">
                <ResumePage />
            </Route>
            <Route path="/blog">
                <BlogPage />
            </Route>
            <Route path="/admin">
                <AdminPage />
            </Route>
            <Route path="/">
                <Intro />
                <AboutPage />
            </Route>
            </Switch>
            <div id="footer">
                <Row>
                    <Col id="footer-left" lg={6} sm={12}>
                        <Link to="/">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Résumé</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>

                    </Col>
                    <Col id="footer-right" lg={6} sm={12}>
                    <p>Made with    💙   by Clare O'Dwyer</p><br/>
                    </Col>
                </Row>
            </div>
        </div>
    </Router>
  );
}

