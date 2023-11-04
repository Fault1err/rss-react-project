import React, { useEffect, useState, useMemo, FunctionComponent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  SearchResultsProps,
  Character,
} from '../interfaces/search-results-props';

import Pagination from './Pagination';

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  searchTerm,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const initialPageParam = searchParams.get('page');
  const initialPage = initialPageParam ? parseInt(initialPageParam) : 1;

  const [results, setResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPageNumber, setCurrentPageNumber] =
    useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchSearchResults = async (page: number) => {
      setLoading(true);
      const trimmedSearchTerm: string = searchTerm.trim();
      const apiUrl: string = `https://rickandmortyapi.com/api/character/?name=${trimmedSearchTerm}&page=${page}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setResults(data.results);
        setTotalPages(data.info.pages);
        setLoading(false);

        searchParams.set('name', trimmedSearchTerm);
        searchParams.set('page', page.toString());
        navigate(`?${searchParams.toString()}`);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchSearchResults(currentPageNumber);
  }, [searchTerm, currentPageNumber, searchParams, navigate]);

  const makePageChange = (page: number): void => {
    setCurrentPageNumber(page);
  };

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPageNumber}
            onPageChange={makePageChange}
          />
          <ul className="results-block">
            {results.length > 0 ? (
              results.map((result) => (
                <li key={result.id}>
                  <img src={result.image} width="250px" alt="picture" />
                  <p>{result.name}</p>
                  <p>{result.species}</p>
                  <p>{result.type}</p>
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default SearchResults;
