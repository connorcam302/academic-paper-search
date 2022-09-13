import React from "react";
import Papers from "./Papers.js";

/**
* Author
* 
* Creates an instance of an author to be shown.
*
* @author Connor Campbell
* @todo
*/

class Author extends React.Component {
    constructor(props) {
        super(props)
        this.state = { display: false }
    }

    handleClick = () => {
        this.setState({display:!this.state.display})
    }


    render() {
        let details = ""
        if (this.state.display) {
            details = 
                <div className="dropDown">
                  <Papers authorid={this.props.author.ID} />
                </div>
        }

        return(
            <div className="author">
                <p className="title" onClick={this.handleClick}>{this.props.author.FullName}</p>
                {details}
            </div>
        )
    }
}

export default Author;