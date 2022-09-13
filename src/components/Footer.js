import React from "react";

/**
* Footer
* 
* Creates a footer to be shown at the bottom of the page.
*
* @author Connor Campbell
* @todo
*/

class Footer extends React.Component {
 constructor(props) {
     super(props)
 }

 render() {
     return(
         <div className="footer">
            Connor Campbell <br></br>
            <div className="footerSubtext">W18003255 <br></br>
            KF6012 Part 2 Coursework <br></br></div>
         </div>
     )
 }
}

export default Footer;