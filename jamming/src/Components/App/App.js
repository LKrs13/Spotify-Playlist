import './App.css';
import React from 'react';
import logo from './logo.svg';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import style from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.searchResults = [];
    this.state.playListName = 'New Playlist';
    this.state.playListTracks = [];
    this.addTrack = this.addTrack.bind(this);
  }
  addTrack(track) {
    if (this.state.playListTracks.includes(track.id)) {
      return;
    }
    this.state.playListTracks.push(track);
  }
  render () {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar searchResults={this.state.searchResults}/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks}/>
        </div>
      </div>
    </div>
  );
  }
}