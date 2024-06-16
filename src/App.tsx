import { useEffect, useState } from 'react';
import { getRecipes } from './services/api';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import { Recipe } from './types/recipe';

import './App.css';
import RecipeList from './components/Recipes/RecipeList';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes(20);
      console.log('data', data);

      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <section className="flex w-full flex-col">
      <Header />
      <div className="bg-pale-orange flex min-h-screen w-full flex-col">
        <Hero />
      </div>
      {recipes && <RecipeList recipes={recipes} />}
      <footer className="container bg-black">footer</footer>
    </section>
  );
}

export default App;
