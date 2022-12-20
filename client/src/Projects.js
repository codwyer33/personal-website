import React from 'react';
import {Row, Col } from 'react-bootstrap';
// import FingerprintIcon from '@material-ui/icons/Fingerprint';
let projects = [
  {
    title:"MLB Predictions Using AI",
    description:"A personal favorite project of mine with guidance from AI4ALL's Portfolio Project Summer Program. I used Lahman's Baseball Dataset and built many versions of a linear regression model to predict MLB team win's using past year's stats.",
    img:"./images/MLB-poster.png",
    link:null,
    date: "June - July 2021",
    tools:"Python, pandas, sklearn, data pre-processing, Google Collab"
  },
  {
    title:"Tweet Classification Using AI",
    description:"A team project completed over 3 weeks at Stanford's 2020 summer camp to classify tweets from past natural disasters into categories like food, water, and medical. We used 6 different approaches and evaluated them using metrics like accuracy, precision, recall, and F1 score.",
    img:"./images/tweet-graphs.png",
    link:null,
    date: "July 2020",
    tools:"Python, various Python modules, various NLP algorithms, data cleaning techniques, Google Collab"
  },
  {
    title:"Off Locust Website",
    description:"A website my sister Olivia and I designed and created for a Penn student-run publication.",
    img:"./images/off-locust.png",
    date: "June 2020",
    link:"https://safe-escarpment-66756.herokuapp.com/",
    tools:"HTML, CSS, Express, EJS, JS, Node, Bcrypt, MongoDB, Canva, Bootstrap, Mailchimp API"
  },
  {
    title:"Apollo: YIM Sites",
    description:"A series of projects I made as a part of Apollo: Youth In Medicine's student leadership team to match high school students with hundreds of physician shadowing times, pull data from Google Sheets, export and grade applications, and send out individualized mass emails. We used it in Summer 2021 to match 40 students with 140 times!",
    img:"./images/apollo_match.png",
    link:null,
    date: "July 2020 - July 2021",
    tools:"HTML, CSS, Express, EJS, Node, MongoDB Realm/Atlas, Bootstrap, Nodemailer, Bcrypt, Google Sheets Script Editor"
  },
  {
    title:"To-Do List Web App",
    description:"A simple project I made through a Web Development course to display the current date and store user task inputs. Afterward, I modified the styling features and added a delete action.",
    img:"./images/todo-list.png",
    date: "May 2020",
    link:"https://to-do-list-codwyer.herokuapp.com",
    tools:"HTML, CSS, Express.js, JavaScript, Node.js"
  }
];

function makeProject(p){
  if (p.link != null){
    return <div>
      <Row>
          <Col className="project-left" lg={6} sm={12}>
              <a href={p.link} target="blank"><img class="project-img" src={p.img} alt="project-img" /></a>
          </Col>
          <Col className="project-right" lg={6} sm={12}>
              <hr></hr><br/>
              <h3>{p.title}</h3> <br/>
              <p> {p.description}<br/><br/> Tools used: {p.tools}<br/><br/><i>{p.date}</i><br/></p><br/>
              <a href={p.link} target="blank"><button type="button">View</button></a>
              <br/><br/><hr></hr>
         </Col>
      </Row>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>;
  } else {
    return <div>
      <Row> 
          <Col className="project-left" lg={6} sm={12}>
              <img class="project-img" src={p.img} alt="project-img" />
          </Col>
          <Col className="project-right" lg={6} sm={12}>
              <hr></hr><br/>
              <h3>{p.title}</h3> <br/>
              <p> {p.description}<br/><br/> Tools used: {p.tools}<br/><br/><i>{p.date}</i><br/></p><br/>
              <hr></hr>
         </Col>
      </Row>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>;
  }
}

function Projects(){
  return(
    <div id="content">
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
      {projects.map(makeProject)}
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>
  );
}

export default Projects;
