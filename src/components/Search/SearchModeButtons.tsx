import Button from '../Button';

interface SearchButtonsProps {
  searchBy: string | null;
  setSearchBy: (option: string) => void;
}

const SearchButtons = ({ searchBy, setSearchBy }: SearchButtonsProps) => {
  return (
    <ul className="flex items-center justify-center gap-x-10">
      <li>
        <Button
          className={`w-fit ${searchBy === 'recipe' ? 'bg-gray-200' : ''}`}
          variant="secondary"
          onClick={() => setSearchBy('recipe')}
        >
          Search for a recipe
        </Button>
      </li>
      <li>
        <Button
          className={`w-fit ${searchBy === 'ingredients' ? 'bg-gray-200' : ''}`}
          variant="secondary"
          onClick={() => setSearchBy('ingredients')}
        >
          Search by ingredients
        </Button>
      </li>
    </ul>
  );
};

export default SearchButtons;
