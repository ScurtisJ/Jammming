import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../App.css'

import Playlist from './Playlist.jsx'
import SearchBar from './SearchBar.jsx'
import SearchResults from './SearchResults.jsx'


function App() {

  // State to hold search results
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
    { id: 3, name: "Track 3", artist: "Artist 3", album: "Album 3" },
  ]);

  // Handler to update search results
  const setSearchResultsHandler = (results) => {
    setSearchResults(results);
  }

  // State to hold playlist tracks
  const [playlistTracks, setPlaylistTracks] = useState([]);



  // JSX to render the App component
  return (
    <>
      <header>
        <h1>Welcome to Jammming</h1>
        <p>Create your jammming playlist and upload it to your actual Spotify account!!!</p>
      </header>

      <main>
        <div className="SearchBar">
          <SearchBar onSearch={setSearchResultsHandler} />
        </div>

        <div className="app-content">
          <SearchResults results={searchResults}/>
          <Playlist />
        </div>

      </main>
    </>
  )
}

export default App
