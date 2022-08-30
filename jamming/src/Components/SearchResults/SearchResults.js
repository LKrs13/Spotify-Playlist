import React from "react"
import TrackList from "./TrackList"
import SearchResultCSS from "./SearchResults.css"

export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList isRemoval={false} onAdd={this.props.onAdd} />
            </div>
        )
    }
}