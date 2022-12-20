import React from 'react';
import {Row, Col } from 'react-bootstrap';

function Admin(props){

  return(
    <div id="blog-col">
        <form>
            <input name="title" placeholder="Title"/><br/>
            <input name="date" placeholder="Date"/><br/>
            <textarea name="text" rows="5" cols="50" /><br/>
            <input type="submit" onClick={props.handleAdminClick}/>
        </form>
        <div className="spacer"/>
    </div>
  );
}

export default Admin;
