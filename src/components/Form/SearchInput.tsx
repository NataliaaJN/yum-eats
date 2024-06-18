import { ChangeEventHandler, MouseEventHandler, useRef } from 'react';

interface SearchInputProps {
  className?: string;
  placeholder?: string;
  value: string;
  handleSearchOnClick?: boolean;
  onClickSearch?: (inputValue: string) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({
  className,
  placeholder = 'Search...',
  value,
  handleSearchOnClick = false,
  onClickSearch,
  onChange,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (onClickSearch && inputRef.current) {
      onClickSearch(inputRef.current.value);
    }
  };
  return (
    <div
      className={`${className} relative flex items-center self-center overflow-hidden rounded-full border p-2 focus-within:shadow-sm focus-visible:border-none`}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-4">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <input
        ref={inputRef}
        className="ml-10 w-full placeholder:ml-10 focus:outline-none"
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {handleSearchOnClick && onClickSearch && (
        <button
          onClick={handleButtonClick}
          className="absolute right-0 top-0 h-full rounded-full bg-cyan px-4 text-white"
        >
          Search
        </button>
      )}
    </div>
  );
};

export default SearchInput;
