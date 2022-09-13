import React from "react";

/**
* SearchBox
* 
* Used to search by text for specific entries
*
* @author Connor Campbell
* @todo
*/

class SearchBox extends React.Component {

    render() {
        return (
            <div className="searchBox">
            <label>
                Search: 
                <input type='text' placeholder='search' value={this.props.search} onChange={this.props.handleSearch} />
            </label>
            </div>
        )
    }
}

export default SearchBox;