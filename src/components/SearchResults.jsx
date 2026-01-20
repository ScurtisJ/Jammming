
function SearchResults( { results } ){
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={results} />
        </div>
    );
}

export default SearchResults;