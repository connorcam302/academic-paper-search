import React from "react";
import Author from "./Author.js";

/**
* Author
* 
* Creates an list of all of the authors.
*
* @author Connor Campbell
* @todo
*/

class Authors extends React.Component {
    
    constructor(props){
        super(props)
        this.state = { results:[] }
    }

    componentDidMount() {
        let url = "http://unn-w18003255.newnumyspace.co.uk/kf6012/coursework/part1/api/authors" 
        
        fetch(url)
        .then( (response) => { 
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText)
            }
        })
        .then( (data) => {
            this.setState({results:data.results})
        })
        .catch ((err) => { 
            console.log("something went wrong ", err) 
        });

    }

    filterSearch = (s) => {
        return s.FullName.toLowerCase().includes(this.props.search.toLowerCase())
    }

    render() {
    let filteredResults = this.state.results
    let buttons = ""
    let noData = "" 

    if (this.state.results.length === 0) {
            noData = <p>No data</p>
    }

    if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
        filteredResults = filteredResults.filter(this.filterSearch) 
    }

    if (this.props.page !== undefined) {
        const pageSize = 10
        let pageMax = this.props.page * pageSize
        let pageMin = pageMax - pageSize
        
        buttons = (
           <div className="pageButtonContainer">
               <button className="pageButton" onClick={this.props.handlePreviousClick} disabled={this.props.page <= 1}>Previous</button>
               <button className="pageButton" onClick={this.props.handleNextClick} disabled={this.props.page >= Math.ceil(filteredResults.length / pageSize)}>Next</button>
           </div>
        )
        filteredResults = filteredResults.slice(pageMin,pageMax)
    }
   
    return (
        <div className="authorList">
            {noData}
            {filteredResults.map( (author, i) => (<Author key={author.FullName} author={author}/>) )}
            {buttons}
        </div>
    )
    }
}
   
export default Authors;