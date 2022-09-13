import React from "react";
import Paper from "./Paper.js";
import CheckBox from "./CheckBox.js";

/**
* ReadingList
* 
* Loads the users reading list specific to their account.
*
* @author Connor Campbell
* @todo
*/

class ReadingList extends React.Component {
 
    constructor(props){
        super(props)
        this.state = {
            readlist : [],
            results : []
        }
    }
   
    componentDidMount() {
        let url = "http://unn-w18003255.newnumyspace.co.uk/kf6012/coursework/part1/api/papers" 
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

        url = "http://unn-w18003255.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', localStorage.getItem('myReadingListToken'));
    
        fetch(url, {    method: 'POST',
                        headers : new Headers(),
                        body:formData})
        .then( (response) => {
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText);
            }
         })
         .then( (data) => {
            this.setState({readinglist:data.results})
               })
         .catch ((err) => { 
                   console.log("something went wrong ", err) 
         });
    }

    render() {
        return (
            <div>
                {this.state.results.map( (paper) => (   
                <div className="paperCheckRow" key={paper.ID}>
                    <CheckBox readinglist={this.state.readinglist} ID={paper.ID} />
                    <Paper paper={paper}/> 
                </div>
                    ) 
                )}
            </div>
        )
    }
}
   
export default ReadingList;