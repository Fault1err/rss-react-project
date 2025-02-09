import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  UseSearchResultsProps,
  Character,
  ResultsResponse,
} from '../interfaces/search-results-props';

export const useResults = ({
  searchTerm,
  currentPage,
  charsPerPage,
}: UseSearchResultsProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  if (searchTerm.trim() !== '') {
    searchParams.set('name', searchTerm);
  } else {
    searchParams.delete('name');
  }
  searchParams.set('page', currentPage.toString());

  const [results, setResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect((): void => {
    const fetchSearchResults = async (): Promise<void> => {
      setLoading(true);
      const trimmedSearchTerm: string = searchTerm.trim();
      const apiUrl: string = `https://rickandmortyapi.com/api/character/?name=${trimmedSearchTerm}&page=${currentPage}`;

      try {
        const response: Response = await fetch(apiUrl);
        const data: ResultsResponse = await response.json();
        const perPageResults: Character[] = data.results.slice(
          0,
          parseInt(charsPerPage, 10)
        );
        setResults(perPageResults);
        setTotalPages(data.info.pages);
        setLoading(false);

        navigate(`?${searchParams.toString()}`);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchTerm, currentPage, charsPerPage, navigate, searchParams]);

  return { results, loading, totalPages };
};
