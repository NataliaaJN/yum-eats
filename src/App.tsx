import { ChangeEvent, useEffect, useState } from 'react';
import { getRecipes, searchRecipes } from './services/api';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import { Recipe } from './types/recipe';

import './App.css';
import RecipeList from './components/Recipes/RecipeList';
import SearchInput from './components/Form/SearchInput';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchRecipes = async () => {
    const data = await getRecipes(20);
    console.log('data', data);
    setRecipes(data);
  };

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const value = event.target.value.toLocaleLowerCase();
    setSearchTerm(value);

    if (value === '') {
      fetchRecipes();
    } else {
      const data = await searchRecipes(value);
      setRecipes(data);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section className="flex w-full flex-col">
      <Header />
      <div className="bg-pale-orange flex min-h-screen w-full flex-col">
        <Hero />
      </div>
      <SearchInput value={searchTerm} onChange={handleSearch} />

      {recipes && <RecipeList recipes={recipes} />}
      {recipes.length === 0 && searchTerm !== '' && <p>No results found</p>}
      <footer className="container bg-black">footer</footer>
    </section>
  );
}

export default App;
