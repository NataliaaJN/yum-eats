import { ChangeEventHandler } from 'react';
import SearchInput from '../Form/SearchInput';

interface SearchBarProps {
  value: string;
  searchBy: string | null;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClickSearch?: (inputValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  searchBy,
  onChange,
  onClickSearch,
}) => {
  return (
    <SearchInput
      className="w-full md:w-1/2"
      value={value}
      placeholder={
        searchBy === 'recipe'
          ? 'Search for a recipe (e.g., pasta, cake)'
          : 'Enter ingredients separated by commas (e.g., tomato, cheese)'
      }
      handleSearchOnClick={searchBy === 'ingredients'}
      onClickSearch={onClickSearch}
      onChange={onChange}
    />
  );
};

export default SearchBar;
