import React from "react";

import Footer from "./Footer.js";

/**
* NotFount
* 
* Creates a page for the user to go when the desired page cannot be found.
*
* @author Connor Campbell
* @todo
*/

class NotFound extends React.Component {

    render(){
        return(
            
            <div>
                <p>Page not found.</p>
                <Footer />
            </div>
            
        )
    }
}

export default NotFound;