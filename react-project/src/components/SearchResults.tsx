import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { SearchResultsProps } from '../interfaces/search-results-props';

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  results,
  loading,
  searchTerm,
}) => {
  return (
    <div className="results-section">
      {loading ? (
        <div className="loader">LOADING...</div>
      ) : (
        <ul className="results-block">
          {results.length > 0 ? (
            results.map((result) => (
              <Link
                className="char-link"
                key={result.id}
                to={`/char/${result.id}`}
              >
                <li>
                  <img src={result.image} width="250px" alt="picture" />
                  <p>{result.name}</p>
                  <p>{result.species}</p>
                </li>
              </Link>
            ))
          ) : (
            <li>No results found for {searchTerm}</li>
          )}
        </ul>
      )}
    </div>
  );
};
export default SearchResults;
