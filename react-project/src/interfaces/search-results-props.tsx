export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  type: string;
}

export interface SearchResultsProps {
  searchTerm: string;
}
