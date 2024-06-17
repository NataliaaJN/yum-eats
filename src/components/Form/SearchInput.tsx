import { ChangeEventHandler } from 'react';

interface SearchInputProps {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({
  className,
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <div
      className={`${className} relative flex items-center self-center rounded-full border p-2 focus-within:shadow-sm focus-visible:border-none`}
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
        className="ml-10 w-full placeholder:ml-10 focus:outline-none"
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder ?? 'Search...'}
      />
    </div>
  );
};

export default SearchInput;
