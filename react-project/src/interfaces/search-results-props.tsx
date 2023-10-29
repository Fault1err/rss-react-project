export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface SearchResultsProps {
  searchTerm: string;
}

export interface SearchResultsState {
  results: Character[];
}
