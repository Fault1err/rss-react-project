import React, { FunctionComponent } from 'react';
import { SearchResultsProps } from '../interfaces/search-results-props';

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  results,
  loading,
  searchTerm,
}) => {
  return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <ul className="results-block">
          {results.length > 0 ? (
            results.map((result) => (
              <li key={result.id}>
                <img src={result.image} width="250px" alt="picture" />
                <p>{result.name}</p>
                <p>{result.species}</p>
                <p>{result.type}</p>
              </li>
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
