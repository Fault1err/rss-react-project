import { Component } from 'react';

class SearchResults extends Component {
  render() {
    return (
      <div className="bottom-section">
        <h2>Search Results</h2>
        <ul className="results-block">
          <li>Result 1</li>
          <li>Result 2</li>
          <li>Result 3</li>
        </ul>
      </div>
    );
  }
}

export default SearchResults;
