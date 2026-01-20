import Track from './Track.jsx';

function Tracklist( { tracks, onAdd } ){

    return (
        <div className="Tracklist">
            {tracks.map(track => (
                <Track 
                track={track} 
                key={track.id} 
                onAdd={onAdd}
                />
            ))}
        </div>
    );
}

export default Tracklist;
