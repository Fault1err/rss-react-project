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
      loading: true,
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
    this.setState({ loading: true });
    const trimmedSearchTerm = searchTerm.trim();
    let apiUrl = 'https://rickandmortyapi.com/api/character/';

    if (trimmedSearchTerm) {
      apiUrl += `?name=${trimmedSearchTerm}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ results: data.results, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { results, loading } = this.state;

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
  }
}

export default SearchResults;
