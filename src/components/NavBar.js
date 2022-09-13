import React from "react";
import {Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

/**
* NavBar
* 
* Creates a consistent navbar for browsing the website.
*
* @author Connor Campbell
* @todo
*/

class NavBar extends React.Component {
 constructor(props) {
     super(props)
 }

 render() {
    let token = localStorage.getItem("myReadingListToken");
    let auth = false;
    if(token) {       
        let decodedToken = jwt_decode(token);
        let currentDate = new Date();
      
        // JWT exp is in seconds
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
          auth = false
        } else {
          auth = true
        }}
    let navbar = (
        <nav className="navBar">
            <ul className="navList">
                <li className="navItem"><Link className="navText" to="/">Home</Link></li>
                <li className="navItem"><Link className="navText" to="papers">Papers</Link></li>
                <li className="navItem"><Link className="navText" to="author">Authors</Link></li>
            </ul>
        </nav>
    )
    if(auth){
        navbar = (            
            <nav className="navBar">
                <ul className="navList">
                    <li className="navItem"><Link className="navText" to="/">Home</Link></li>
                    <li className="navItem"><Link className="navText" to="papers">Papers</Link></li>
                    <li className="navItem"><Link className="navText" to="author">Authors</Link></li>
                    <li className="navItem"><Link className="navText" to="readingList">Reading List</Link></li>
                </ul>
            </nav>
    )
    }
     return(
         <div className="navbarContainer">
             {navbar}
         </div>
     )
     
 }
}

export default NavBar;