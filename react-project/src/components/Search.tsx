import { Component } from 'react';
import SearchBtn from './SearchBtn';

class Search extends Component {
  render() {
    return (
      <div className="top-section">
        <input type="text" placeholder="Enter word" />
        <SearchBtn />
      </div>
    );
  }
}

export default Search;
