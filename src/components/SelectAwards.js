import React from "react";

/**
* SelectAwards
* 
* Dropdown list for choosing papers by the awards they have won.
*
* @author Connor Campbell
* @todo
*/

class SelectAwards extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                awards: ""
            }
        }

    handleAwardSelect = (e) => {
        this.setState({award:e.target.value})
    }

    render() {
        return (
            <div className="accoladesBox">
            <label>
                Accolades: 
                <select value={this.state.award} onChange={this.props.handleAwardSelect}>
                    <option value="">Any</option>
                    <option value="all">Award Winning</option>
                    <option value="1">Best Paper</option>
                    <option value="2">Best Paper Honourable Mention</option>
                    <option value="3">Best Pictorial</option>
                    <option value="4">Best Pictorial Honourable Mention</option>
                    <option value="5">Special Recognition For Diversity & Inclusion</option>
                </select>
            </label>
            </div>
        )
    }
}

export default SelectAwards;