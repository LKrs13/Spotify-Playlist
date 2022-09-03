import React from "react";
import TrackList from "./TrackList";
import PlaylistCSS from "./Playlist.css";

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
        <div className="Playlist">
            <input value={"New Playlist"}/>
            <TrackList tracks={this.props.playListTracks} onRemove={this.props.removeTrack}/>
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
  }
}