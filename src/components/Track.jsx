import react from 'react';

function Track( {track, onAdd} ){
    const addTrack = () => {
        if(onAdd){
            onAdd(track);
        }
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {onAdd && <button className="Track-action" onClick={addTrack}>+</button>}
        </div>

    );

}

export default Track;