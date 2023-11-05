export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  type: string;
}
export interface SearchResultsProps {
  results: Character[];
  loading: boolean;
  searchTerm: string;
}
export interface UseSearchResultsProps {
  searchTerm: string;
  currentPage: number;
  charsPerPage: string;
}
