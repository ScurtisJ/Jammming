import Tracklist from './Tracklist';

function Playlist({currentPlaylist, onRemove, playlistName, updatePlaylistName}) {

    const handleNameChange = (event) => {
        event.preventDefault();

        updatePlaylistName(event.target.value);
    }

    const handleSave = () => {
        if(currentPlaylist.length === 0){
            alert("Cannot add an Empty Playlist!");
            return;
        } 
        alert("Playlist Saved!");
    }
    return (
        <div className="playlist">
            <h2><input
                value={playlistName} 
                onChange={handleNameChange}

                /></h2>
            <Tracklist tracks={currentPlaylist} onRemove={onRemove}/>
            <button className="playlist-save-button" onClick={handleSave}>SAVE TO SPOTIFY</button>
        </div>
    );
    
}

export default Playlist;