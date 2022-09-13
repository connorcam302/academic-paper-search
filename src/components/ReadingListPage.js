import React from "react";
import ReadingList from "./ReadingList.js"
import jwt_decode from "jwt-decode";

/**
* ReadingListPage
* 
* Creates a page to display the users reading list.
*
* @author Connor Campbell
* @todo
*/

class ReadingListPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list:"",
            hasError: false,
            auth:false
        }
    }

    handleList = (e) => {
        this.setState({list:e.target.value, page:1})
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
        if(auth){
            return (
                <div>
                    <ReadingList />
                </div>
            )
        } else return (
            <div>Login and refresh to view your reading list.</div>
        )

    }
}

export default ReadingListPage;