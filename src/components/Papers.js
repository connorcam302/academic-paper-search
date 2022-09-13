import React from "react";
import Paper from "./Paper.js";

/**
* Papers
* 
* Creates a list of all of the pages.
*
* @author Connor Campbell
* @todo
*/

class Papers extends React.Component {

 constructor(props){
     super(props)
     this.state = {
         results : []
     }
 }

 componentDidMount() {
     let url = "http://unn-w18003255.newnumyspace.co.uk/kf6012/coursework/part1/api/papers" 
     this.fetchData(url)
    }

 componentDidUpdate(prevProps) {
    if (prevProps.award !== this.props.award) {
        let url = "http://unn-w18003255.newnumyspace.co.uk/kf6012/coursework/part1/api/papers"
        this.fetchData(url)
    }
    }
    fetchData = (url) => {
        if (this.props.authorid !== undefined) {
            url += "?authorID=" + this.props.authorid
        } else if (this.props.id !== undefined) {
            url += "?id=" + this.props.id
        }else if (this.props.randomPaper) {
            url += "?id=random"
        } else if (this.props.award !== undefined && this.props.award !== "") {
            url += "?award=" + this.props.award
        }
    
        fetch(url)
        .then( (response) => {
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText);
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
        let searchString = s.Title + " " + s.Abstract
        return searchString.toLowerCase().includes(this.props.search.toLowerCase())
    }

 render() {
    let noData = "" 
    if (this.state.results.length === 0) {
            noData = <p>No data</p>
    }

    let filteredResults = this.state.results
    

    if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
        filteredResults = filteredResults.filter(this.filterSearch) 
    }

    let buttons = ""

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
        <div className="paperList">
            {noData}
            {filteredResults.map( (paper, i) => (<Paper key={paper.title} paper={paper}/>) )}
            {buttons}
        </div>
    )
}
}

export default Papers;