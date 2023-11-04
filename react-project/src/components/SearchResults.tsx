import React, { useEffect, useState } from 'react';
import {
  SearchResultsProps,
  Character,
} from '../interfaces/search-results-props';

const SearchResults: React.FC<SearchResultsProps> = ({ searchTerm }) => {
  const [results, setResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect((): void => {
    const fetchSearchResults = (): void => {
      setLoading(true);
      const trimmedSearchTerm: string = searchTerm.trim();
      let apiUrl: string = 'https://rickandmortyapi.com/api/character/';

      if (trimmedSearchTerm) {
        apiUrl += `?name=${trimmedSearchTerm}`;
      }

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    };

    fetchSearchResults();
  }, [searchTerm]);

  console.log(results);

  return (
    <div className="bottom-section">
      <h2>Search Results</h2>
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
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
