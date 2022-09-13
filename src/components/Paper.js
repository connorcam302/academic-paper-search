import React from "react";

/**
* Paper
* 
* Creates an instance of a paper to be shown.
*
* @author Connor Campbell
* @todo
*/

class Paper extends React.Component {
 constructor(props) {
     super(props)
     this.state = { 
         displayDetails: false,
         displayAffil:false,
         displayAwards:false
        }
 }

 handleDetailsClick = () => {
     this.setState({displayDetails:!this.state.displayDetails})
     if(this.state.displayDetails) {
        this.setState({displayAffil: false})
        this.setState({displayAwards: false})
     }
 }

 handleAffilClick = () => {
    this.setState({displayAffil:!this.state.displayAffil})
}

handleAwardsClick = () => {
    this.setState({displayAwards:!this.state.displayAwards})
}


 render() {
     let details = ""
     let affiliations = ""
     let awards = ""
     let results = this.props.paper

     if (this.state.displayAffil) {
        affiliations = 
            <div className="dropDown">
              <p><b>Institution: </b>{results.Affiliation.Institution}</p>
              <p><b>Department: </b>{results.Affiliation.Department}</p>
              <p><b>Country: </b>{results.Affiliation.Country}</p>
              <p><b>State: </b>{results.Affiliation.State}</p>
              <p><b>City: </b>{results.Affiliation.City}</p>
            </div>
    }

    if (this.state.displayAwards) {
            awards = 
            <div className="dropDown">
               <ul>
                    {results.Awards.map( (awards, i) => (<li>{awards}</li>) )}
               </ul>
            </div>
    }
    let awardController;
    if(Object.keys(results.Awards).length !== 0){
    awardController = 
        <div>
            <p onClick={this.handleAwardsClick} className="title">Awards</p> 
            {awards}
        </div>
    } else {
        awardController = <div></div>
    }
    
    
     if (this.state.displayDetails) {
         details = 
             <div className="dropDown">
               <p>{results.Abstract}</p>
               <ul>
                    {results.Author.map( (author, i) => (<li>{author.FullName}</li>) )}
               </ul>
               {awardController}
               <p onClick={this.handleAffilClick} className="title">Affiliation</p>
               {affiliations}
             </div>
     }



     return(
         <div className="paper">
             <p onClick={this.handleDetailsClick} className="title">{this.props.paper.Title}</p>
             {details}
         </div>
     )
 }
}

export default Paper;