import React from "react";
import Login from "./Login.js";
import jwt_decode from "jwt-decode";
import { Link, Route } from "react-router-dom"; 
import HomePage from "./HomePage.js";

/**
* Header
* 
* Creates a header containing the title, and the login area.
*
* @author Connor Campbell
* @todo
*/

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            authenticated: false, 
            email: "", 
            password: ""
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('myReadingListToken')) {
            this.setState({authenticated:true});
            this.state.email = localStorage.getItem("username")
        }

        let token = localStorage.getItem("myReadingListToken");
        if(token) {       
            let decodedToken = jwt_decode(token);
            let currentDate = new Date();
          
            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
              this.handleLogoutClick();
            } else { 
            }}
    }
    

    handlePassword = (e) => {
        this.setState({password:e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }

    handleLoginClick = () => {
        let url = "http://unn-w18003255.newnumyspace.co.uk/kf6012/coursework/part1/api/authenticate" 
    
        // Send the email and password as 'Form Data'.
        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
    
        // A fetch request with 'POST' method specified
        fetch(url, { method: 'POST',
                     headers : new Headers(),
                     body:formData
                   })
        .then( (response) => {
            // Successful authentication will return
            // a 200 status code.
            if (response.status === 200) {
                return response.json() 
            } else {
                alert("Username Or Password Incorrect.")
                throw Error(response.statusText)
            }
        })
        .then( (data) => {
            // If results include a token, change state
            // to authenticated
            if ("token" in data.results) {
                this.setState({ authenticated: true })
                // Save token in local storage
                localStorage.setItem('myReadingListToken', data.results.token);
                localStorage.setItem("username", this.state.email);
                
                <Route path="/" element={<HomePage />} />
                window.location.reload(false);
            } 

        })
        .catch ((err) => {
            console.log("something went wrong ", err)
            }
        );
    }
	
    handleLogoutClick = () => {
        this.setState({"authenticated":false})
        localStorage.removeItem('myReadingListToken');  
        localStorage.removeItem('username');
        
    }

    render() {
        let page = (
            <Login 
                handleEmail={this.handleEmail} 
                handlePassword={this.handlePassword}
                handleLoginClick={this.handleLoginClick}
            />
        )
        if (this.state.authenticated) {
            page = (
                <div className="loginContainer">
                    {this.state.email}
                    <br></br>
                    <br></br>
                    <div className="authButton">
                        <Link style={{ textDecoration: 'none' }} to="/" onClick={() => this.handleLogoutClick()}>Logout</Link>
                    </div>
                    
                </div>
            )
        }

        return (
        <div className="header">
            <h1>Academic Paper Library</h1>
            {page}
        </div>
        )
    }

}
export default Header;