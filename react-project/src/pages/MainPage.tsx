import React, { FunctionComponent, useState, useCallback } from 'react';
import '../App.css';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';

const MainPage: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>(
    localStorage.getItem('searchTerm') || ''
  );
  const [testError, setTestError] = useState<boolean>(false);

  const saveSearch = useCallback((term: string): void => {
    localStorage.setItem('searchTerm', term);
    setSearchTerm(term);
  }, []);

  const testErrorClick = useCallback((): void => {
    setTestError((prevState) => !prevState);
    throw new Error('Test error!');
  }, []);

  if (testError) {
    console.error('This is an error:', testError);
    return (
      <div>
        <h1>Something went wrong.</h1>
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <Search onSearch={saveSearch} />
        <button onClick={testErrorClick}>Test Error</button>
        <SearchResults searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default MainPage;
