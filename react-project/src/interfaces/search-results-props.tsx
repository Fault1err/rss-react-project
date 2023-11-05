export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  type: string;
}

export interface DetailedCharacter {
  id: number;
  name: string;
  image: string;
  species: string;
  type: string;
  location: Location;
}
interface Location {
  name: string;
  url: string;
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
