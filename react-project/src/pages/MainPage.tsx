import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Pagination from '../components/Pagination';
import '../App.css';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import { useResults } from '../utils/getResults';
import CharsPerPage from '../components/CharsAmountOnPage';

function MainPage(): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>(
    localStorage.getItem('searchTerm') || ''
  );
  const [testError, setTestError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [charsPerPage, setCharsPerPage] = useState<string>('20');

  const makeAmountPerPageChange = useCallback((num: string): void => {
    setCharsPerPage(num);
    setCurrentPage(1);
  }, []);

  const { results, loading, totalPages } = useResults({
    searchTerm,
    currentPage,
    charsPerPage,
  });

  const saveSearch = useCallback((term: string): void => {
    localStorage.setItem('searchTerm', term);
    setSearchTerm(term);
    setCurrentPage(1);
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

  const makePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="App">
        <Search onSearch={saveSearch} />
        <button onClick={testErrorClick}>Test Error</button>
        <div className="bottom-section">
          <h2>Search Results</h2>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={makePageChange}
          />
          <CharsPerPage setCharAmount={makeAmountPerPageChange} />

          <div className="results_flex">
            <SearchResults
              searchTerm={searchTerm}
              results={results}
              loading={loading}
            />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
