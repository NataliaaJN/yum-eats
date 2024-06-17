import React from 'react';
import SearchButtons from './SearchModeButtons';
import SearchInput from '../Form/SearchInput';

interface SearchProps {
  searchTerm: string;
  searchBy: string | null;
  setSearchBy: (option: string) => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({
  searchTerm,
  searchBy,
  setSearchBy,
  handleSearch,
}: SearchProps) => {
  return (
    <div className="flex w-full flex-col gap-y-6">
      <SearchButtons searchBy={searchBy} setSearchBy={setSearchBy} />
      {searchBy && (
        <SearchInput
          className="w-full md:w-1/2"
          value={searchTerm}
          onChange={handleSearch}
          placeholder={
            searchBy === 'recipe'
              ? 'Search for a recipe (e.g., pasta, cake)'
              : 'Enter ingredients separated by commas (e.g., tomato, cheese)'
          }
        />
      )}
    </div>
  );
};

export default Search;
