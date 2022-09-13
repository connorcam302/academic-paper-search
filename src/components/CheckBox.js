import React from "react";

/**
* CheckBox
* 
* Creates a checkbox for the user to use for adding and removing papers from their reading list.
*
* @author Connor Campbell
* @todo
*/

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked:false}
    }
   
    
    isOnList = (item) => {
        return (item.ID === this.props.ID)
    }

    handleOnChange = () => {
        if (this.state.checked) {
            this.removeFromReadingList()
        } else {
            this.addToReadingList()
        }
    }

    addToReadingList = () => {   
        let url = "http://unn-w18003255.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', localStorage.getItem('myReadingListToken'));
        formData.append('add', this.props.ID);

        fetch(url, {   method: 'POST',
                        headers : new Headers(),
                        body:formData})
        .then( (response) => { 
            if ((response.status === 200) || (response.status === 204)) {
                this.setState({checked:!this.state.checked})
            } else {
                throw Error(response.statusText);
            }
        })
        .catch ((err) => { 
            console.log("something went wrong ", err) 
        });
    }

    removeFromReadingList = () => {
        let url = "http://unn-w18003255.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"
            
        let formData = new FormData();
        formData.append('token', localStorage.getItem('myReadingListToken'));
        formData.append('remove', this.props.ID);
    
        fetch(url, {  method: 'POST',
                        headers : new Headers(),
                        body:formData})
        .then( (response) => {
            if ((response.status === 200) || (response.status === 204)) {
                this.setState({checked:!this.state.checked})
            } else {
                throw Error(response.statusText);
            }
        })
        .catch ((err) => { 
            console.log("something went wrong ", err) 
        });
    }

    componentDidMount() {
        let filteredList = this.props.readinglist.filter((item) => (this.isOnList(item)))
        if (filteredList.length > 0) {
            this.setState({checked:true})
        } 
    }

    render() {
        return (
            <input 
              type="checkbox" 
              ID="readlist" 
              name="readlist" 
              value="paper"
              className="checkboxColumn"
              checked={this.state.checked}
              onChange={this.handleOnChange}
            />
        )
    }
}
    
export default CheckBox;