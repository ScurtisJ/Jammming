import Tracklist from './Tracklist.jsx';

function SearchResults( { tracks, onAdd } ){
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={tracks} onAdd={onAdd}/>
        </div>
    );
}

export default SearchResults;