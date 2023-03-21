import React from 'react';

import './SearchPanel.scss';

class SearchPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    onUpdateSearchLoc = (e) => {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input type="text"
                    className="search"
                    placeholder="Quick search"
                    onChange={this.onUpdateSearchLoc}/>
        )
    }
}

export default SearchPanel;