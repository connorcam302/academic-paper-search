import React from "react";
import Papers from "./Papers.js";
import SelectAwards from "./SelectAwards.js";
import SearchBox from "./SearchBox.js";

import '../App.css';

/**
* PaperPage
* 
* Creates a page to display all of the papers
*
* @author Connor Campbell
* @todo
*/

class PaperPage extends React.Component {
 constructor(props) {
     super(props)
     this.state = {
        award: "",
        search: "",
        page: 1
     }
    this.handleAwardSelect = this.handleAwardSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
 }

 handleSearch = (e) => {
    this.setState({search:e.target.value, page:1})
}

handleAwardSelect = (e) => {
    this.setState({award:e.target.value, page:1})
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

  /**
   * The new methods are passed as props to the films component
   */
 render() {
     return (
         <div>
             <div className="filterBox">
                <SearchBox search={this.state.search} handleSearch={this.handleSearch} />
                <SelectAwards award={this.state.award} handleAwardSelect={this.handleAwardSelect} />
             </div>
             <Papers 
               award={this.state.award} 
               search={this.state.search} 
               page={this.state.page} 
               handleNextClick={this.handleNextClick} 
               handlePreviousClick={this.handlePreviousClick} 
            />
         </div>
     )
 }
}

export default PaperPage;