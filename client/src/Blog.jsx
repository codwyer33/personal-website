import React from 'react';
import {Row, Col } from 'react-bootstrap';

function Blog(props){

  function makeBlogEntry(b){
    console.log(b)
    if(b.selected){
      return <input id="blog-btn-selected" type="button" disabled name={b.index} value={b.title+ " | "+b.date} onClick={props.handleBlogClick} text="click"/>
    } //"➤ " + 
    return <div>
        <input id="blog-btn" type="button" name={b.index} value={b.title+ " | "+b.date} onClick={props.handleBlogClick} text="click"/>
    </div>
  }

  function makeSelectedBlog(blogs){
    let thisBlog;
    for (let i=0; i<blogs.length; i++){
      if (blogs[i].selected){
        thisBlog = blogs[i];
      }
    }
    return <div id="blog-entry-div">
      <h2 id="blog-title">{thisBlog.title}</h2><br/>
      <h3 id="blog-undertitle">{thisBlog.date}</h3><br/>
      <p id="blog-text">{thisBlog.text}</p>
    </div>
  }
  return(
    <div id="content">
      <Row>
        <Col id="left-project">
            <div className="title-card">
                <div className="title-card-inner" >
                 <h1>Blog</h1> 
                 <i><h5><br></br>also known as an excuse to watch TV and overanalyze media</h5></i>
                 </div>
            </div>
        </Col>
        <Col id="right-project">
            <img id="project-img" src="./images/bridge-top.png" alt="portrait-img"/>
        </Col>
      </Row>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <Row className="blog-row">
        <Col id="blog-col" className="col-lg-4 col-12">
          <div id="blog-list">
            <h4>Blog Posts</h4>
            <div id="blog-list-items">
              {props.blogs.map(makeBlogEntry)}
            </div>
          </div>
        </Col>
        <Col id="blog-entry">
        {makeSelectedBlog(props.blogs)}
        </Col>
      </Row>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>
  );
}

export default Blog;
