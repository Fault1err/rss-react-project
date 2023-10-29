import React, { Component, ChangeEvent } from 'react';
import SearchBtn from './SearchBtn';
import { SearchProps, SearchState } from '../interfaces/search-props';

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.trim();
    this.setState({ searchTerm });
  };

  makeSearch = () => {
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm);
  };

  render() {
    const { placeholder } = this.props;
    console.log(this.props);
    return (
      <div className="top-section">
        <input
          type="text"
          placeholder={placeholder || 'Search...'}
          value={this.state.searchTerm}
          onChange={this.changeInput}
        />
        <SearchBtn onClick={this.makeSearch} />
      </div>
    );
  }
}

export default Search;
