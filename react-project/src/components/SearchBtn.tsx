import { Component } from 'react';
import { SearchBtnProps } from '../interfaces/search-btn-props';
class SearchBtn extends Component<SearchBtnProps> {
  render() {
    const { onClick } = this.props;
    return <button onClick={onClick}>Search</button>;
  }
}

export default SearchBtn;
