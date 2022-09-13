import React from "react";

class SelectList extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                list: ""
            }
        }

    handleListSelect = (e) => {
        this.setState({list:e.target.value})
    }

    render() {
        return (
            <label>
                Show: 
                <select value={this.state.list} onChange={this.props.handleListSelect}>
                    <option value="All">All Papers</option>
                    <option value="readingList">Listed Papers</option>
                </select>
            </label>
        )
    }
}

export default SelectList;