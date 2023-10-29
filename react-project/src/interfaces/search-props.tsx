export interface SearchProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

export interface SearchState {
  searchTerm: string;
  error: Error | null;
}
