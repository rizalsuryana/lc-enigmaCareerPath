export interface SearchInterface {
  title: string;
  placeholder?: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}
