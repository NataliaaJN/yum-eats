import { ChangeEventHandler } from 'react';
import SearchButtons from './SearchModeButtons';
import SearchBar from './SearchBar';

interface SearchProps {
  searchTerm: string;
  searchBy: string | null;
  setSearchBy: (option: string) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClickSearch?: (inputValue: string) => void;
}

const Search = ({
  searchTerm,
  searchBy,
  setSearchBy,
  onChange,
  onClickSearch,
}: SearchProps) => {
  return (
    <div className="flex w-full flex-col gap-y-6">
      <SearchButtons searchBy={searchBy} setSearchBy={setSearchBy} />
      {searchBy && (
        <SearchBar
          searchBy={searchBy}
          value={searchTerm}
          onChange={onChange}
          onClickSearch={onClickSearch}
        />
      )}
    </div>
  );
};

export default Search;
