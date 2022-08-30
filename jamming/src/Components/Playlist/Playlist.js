import React from "react";
import TrackList from "./TrackList";
import PlaylistCSS from "./Playlist.css";

export class Playlist extends React.Component {
  render() {
    return (
        <div className="Playlist">
            <input value={"New Playlist"}/>
            <TrackList tracks={this.props.playListTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
  }
}