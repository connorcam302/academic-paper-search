import React from "react";

import Authors from "./Authors.js";
import SearchBox from "./SearchBox.js";

import '../App.css';

/**
* Author
* 
* Creates the page for all of the authors to be shown.
*
* @author Connor Campbell
* @todo
*/

class AuthorPage extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           search: "",
           page: 1
       }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
   }

   handleSearch = (e) => {
    this.setState({search:e.target.value, page:1})
}

    /**
     * New method for handling the 'next' button
     */
    handleNextClick = () => {
        this.setState({page:this.state.page+1})
    }

    /**
     * New method for handling the 'previous' button
     */
    handlePreviousClick = () => {
    this.setState({page:this.state.page-1})
    }

   render() {
       return (
           <div>
               <div className="filterBox">
               <SearchBox search={this.state.search} handleSearch={this.handleSearch} />
               </div>
               <Authors search={this.state.search}
                page={this.state.page} 
                handleNextClick={this.handleNextClick} 
                handlePreviousClick={this.handlePreviousClick} />
           </div>
       )
   }
}

export default AuthorPage;