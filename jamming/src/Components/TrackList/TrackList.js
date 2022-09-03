import React from "react";
import TrackListCSS from "./TrackList.css";
import Track from "./Track";

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.tracks.map(track => (
                    <Track
                        key={track.id}
                        track={track}
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}
                    />
                ))}
            </div>
        );
    }
}