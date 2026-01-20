import Track from './Track.jsx';

function Tracklist( { tracks } ){

    return (
        <div className="Tracklist">
            {tracks.map(track => (
                <Track track={track} />
            ))}
        </div>
    );
}

export default Tracklist;
