import react from 'react';
import Tracklist from './Tracklist';

function Playlist({currentPlaylist}){
    return (
        <div className="Playlist">
            <h2>Playlist</h2>
            <p>This is where your playlist tracks will appear.</p>
            <Tracklist tracks={currentPlaylist}/>
        </div>
    );
    
}

export default Playlist;