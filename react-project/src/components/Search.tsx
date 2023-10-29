import React, { Component } from 'react';
import { ChangeEvent } from 'react';
import SearchBtn from './SearchBtn';
import { SearchProps, SearchState } from '../interfaces/search-props';

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    const savedTerm = localStorage.getItem('searchTerm');
    if (savedTerm) {
      this.setState({ searchTerm: savedTerm });
    }
  }

  componentWillUnmount() {
    this.saveSearch = () => {
      localStorage.setItem('searchTerm', this.state.searchTerm);
    };
  }

  changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  saveSearch = () => {
    localStorage.setItem('searchTerm', this.state.searchTerm);
  };

  render() {
    const { placeholder } = this.props;
    return (
      <div className="top-section">
        <input
          type="text"
          placeholder={placeholder || ''}
          value={this.state.searchTerm}
          onChange={this.changeInput}
        />
        <SearchBtn onClick={this.saveSearch} />
      </div>
    );
  }
}

export default Search;
