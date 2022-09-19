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
    this.removeTrack = this.removeTrack.bind(this);
    this.playListName = this.playListName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track) {
    if (this.state.playListTracks.includes(track.id)) {
      return;
    }
    this.state.playListTracks.push(track);
  }
  removeTrack(track) {
    const updatedPlaylist = this.state.playListTracks.filter(!track.id);
    this.setState({playListTracks: updatedPlaylist});
  }
  updatedPlaylistName(name) {
    this.setState({playListName: name});
  }
  savePlaylist() {
    const trackURIS = this.playListName.map(track => track.uri);
    return trackURIS;
  }
  search (term) {
    console.log(term);
  }
  render () {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar searchResults={this.state.searchResults} onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks} 
          onNameChange={this.updatedPlaylistName} onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
  );
  }
}