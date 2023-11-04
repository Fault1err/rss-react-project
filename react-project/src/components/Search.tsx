import React, {
  useState,
  useCallback,
  ChangeEvent,
  FunctionComponent,
} from 'react';
import SearchBtn from './SearchBtn';
import { SearchProps } from '../interfaces/search-props';

const Search: FunctionComponent<SearchProps> = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>(
    localStorage.getItem('searchTerm') || ''
  );

  const changeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const searchTerm: string = event.target.value.trim();
      setSearchTerm(searchTerm);
    },
    []
  );

  const makeSearch = useCallback((): void => {
    onSearch(searchTerm);
  }, [onSearch, searchTerm]);

  return (
    <div className="top-section">
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={searchTerm}
        onChange={changeInput}
      />
      <SearchBtn onClick={makeSearch} />
    </div>
  );
};

export default Search;
