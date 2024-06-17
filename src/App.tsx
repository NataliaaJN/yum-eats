import { ChangeEvent, useEffect, useState } from 'react';
import {
  getRecipes,
  // getRecipesByCategory,
  searchRecipes,
  getRecipesByIngredients,
} from './services/api';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import { Recipe } from './types/recipe';

import './App.css';
import RecipeList from './components/Recipes/RecipeList';
import SearchInput from './components/Form/SearchInput';
import Button from './components/Button';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  // const [category, setCategory] = useState<string | null>(null);
  const [searchBy, setSearchBy] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const data: Recipe[] = await getRecipes(20);
      setRecipes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const value = event.target.value.toLocaleLowerCase();
    setSearchTerm(value);

    if (value === '') {
      fetchRecipes();
    } else {
      setLoading(true);
      try {
        let data: Recipe[] = [];
        if (searchBy === 'recipe') {
          data = await searchRecipes(value);
        } else if (searchBy === 'ingredients') {
          // data = await getRecipesByIngredients(value.split(','));
          const ingredientsArray = value.split(',').map((item) => item.trim());
          console.log(value);

          // data = await getRecipesByIngredients(['tomatoes']);
          data = await getRecipesByIngredients(ingredientsArray);
          // console.log(data);
        }
        // setRecipes(data);
        setRecipes(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section className="relative flex w-full flex-col overflow-hidden">
      <div className="absolute left-0 top-0 -z-10 h-screen w-2/3 bg-pale-orange"></div>
      {/* <div className="absolute -right-1/2 -top-24 h-[150vh] w-full rounded-[50%] bg-white bg-opacity-50 shadow-lg"></div> */}
      <Header />
      <main className="flex w-full flex-col">
        <div className="relative flex min-h-screen w-full flex-col">
          <Hero />
        </div>
        <section className="container flex flex-col items-center gap-y-8">
          <h3 className="text-3xl">
            Ready for a culinary adventure? Let's get cooking!
          </h3>
          <div className="flex w-full flex-col gap-y-6">
            <ul className="flex items-center justify-center gap-x-10">
              <li>
                <Button
                  className="w-fit"
                  variant="secondary"
                  onClick={() => setSearchBy('recipe')}
                >
                  Search for a recipe
                </Button>
              </li>
              <li>
                <Button
                  className="w-fit"
                  variant="secondary"
                  onClick={() => setSearchBy('ingredients')}
                >
                  Search by ingredients
                </Button>
              </li>
            </ul>
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
          {loading && <p>Loading...</p>}
          {!loading && recipes && <RecipeList recipes={recipes} />}
          {!loading && recipes.length === 0 && searchTerm !== '' && (
            <p>No results found</p>
          )}
        </section>
      </main>
      <footer className="container bg-black">footer</footer>
    </section>
  );
}

export default App;
