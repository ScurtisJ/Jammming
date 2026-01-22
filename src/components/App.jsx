import { useState } from 'react'
import '../App.css'

import Playlist from './Playlist.jsx'
import SearchBar from './SearchBar.jsx'
import SearchResults from './SearchResults.jsx'
import spotifyLogo from '../assets/spotify-logo.png'
import mockResults from '../assets/mock-results.jsx'  


function App() {

  // State to hold search results
  const [searchResults, setSearchResults] = useState(mockResults);

  // Handler to update search results
  const setSearchResultsHandler = (searchResults) => {
    if(searchResults ===""){
      setSearchResults([]);
      return;
    }

    //Convert the lowered search term to lowercase for case-insensitive comparison
    const loweredSearch = searchResults.toLowerCase();

    const fitleredResults = mockResults.filter((track) => {
      const matchesName = track.name.toLowerCase().includes(loweredSearch) 
      const matchesArtist = track.artist.toLowerCase().includes(loweredSearch) 
      const matchesAlbum =track.album.toLowerCase().includes(loweredSearch)

      return matchesName || matchesArtist || matchesAlbum;
    });

    setSearchResults(fitleredResults);
  }
  // State to hold playlist name
  const [playlistName, setPlaylistName] = useState("My Jammming Playlist");

  // Handler to update playlist name
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  // State to hold playlist tracks
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Handler to update the playlist to add a track
  const addTrack = (track) => {
    const isAlreadyAdded = playlistTracks.some(t => t.id === track.id);

    if(!isAlreadyAdded) {
      setPlaylistTracks([...playlistTracks, track]);
    } else {
      alert("Unable to Add Track: Track is already in the playlist!");
    }
  }

  //Handler to update the playlist to remove a track
  const removeTrack = (track) => {
    const updatedPlaylist = playlistTracks.filter(t => t.id !== track.id);
    setPlaylistTracks(updatedPlaylist);
  }


  // JSX to render the App component
  return (
    <>
      <header className="header-content">
        <h1>Welcome to Jammming 
          <img src={spotifyLogo} className="logo" alt="logo"/> 
        </h1>
        <h3>Create your jammming playlist and upload it to your actual Spotify account!!!</h3>
      </header>

      <main>
        <div className="SearchBar">
          <SearchBar onSearch={setSearchResultsHandler} />
        </div>

        <div className="app-content">
          <SearchResults tracks={searchResults} onAdd={addTrack}/>
          <Playlist 
            currentPlaylist={playlistTracks} 
            onRemove={removeTrack} 
            playlistName={playlistName} 
            updatePlaylistName={updatePlaylistName}
          />
        </div>

      </main>
    </>
  );
}

export default App
