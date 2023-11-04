import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';

import '../App.css';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';

function MainPage(): React.JSX.Element {
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
        <div className="bottom-section">
          <h2>Search Results</h2>

          <div className="results_flex">
            <SearchResults searchTerm={searchTerm} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
