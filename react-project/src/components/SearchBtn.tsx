import React, { FunctionComponent } from 'react';
import { SearchBtnProps } from '../interfaces/search-btn-props';

const SearchBtn: FunctionComponent<SearchBtnProps> = ({ onClick }) => {
  return <button onClick={onClick}>Search</button>;
};

export default SearchBtn;
