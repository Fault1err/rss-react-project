import React, { Component } from 'react';
import {
  SearchResultsProps,
  SearchResultsState,
} from '../interfaces/search-results-props';

class SearchResults extends Component<SearchResultsProps, SearchResultsState> {
  constructor(props: SearchResultsProps) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    this.fetchSearchResults();
  }

  componentDidUpdate(prevProps: SearchResultsProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.fetchSearchResults();
    }
  }

  fetchSearchResults = () => {
    const { searchTerm } = this.props;
    const trimmedSearchTerm = searchTerm.trim();
    let apiUrl = 'https://rickandmortyapi.com/api/character/';

    if (trimmedSearchTerm) {
      apiUrl += `?name=${trimmedSearchTerm}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ results: data.results });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  render() {
    const { results } = this.state;

    return (
      <div className="bottom-section">
        <h2>Search Results</h2>
        <ul className="results-block">
          {results.length > 0 ? (
            results.map((result) => (
              <li key={result.id}>
                <img src={result.image} alt="picture" />
                {result.name}
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
