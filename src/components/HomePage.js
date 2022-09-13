import React from "react";
import LibraryImage from "./../img/library_patricktomasso.jpg";
import Papers from "./Papers.js";

/**
* Homepage
* 
* Creates the homepage containing random papers and a credited image.
*
* @author Connor Campbell
* @todo
*/

class HomePage extends React.Component {

    render(){
        return(
            <div className="homePage">
                <h2>Featured Papers</h2>
                <Papers randomPaper={true} className="randomPaper"/>
                <Papers randomPaper={true} className="randomPaper"/>
                <Papers randomPaper={true} className="randomPaper"/>
                <div className="LibraryImage">
                <img src={LibraryImage} className="LibraryImage" alt="Library Books" />
                <p>
                Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/academic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </p>
                </div>
            </div>
            
        )
    }
}

export default HomePage;