import { useEffect, useState } from 'react';
import { getRecipes } from './services/api';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import { Recipe } from './types/recipe';

import './App.css';

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
    <section className="w-full">
      <Header />
      <div className="bg-pale-orange flex min-h-screen w-full flex-col">
        <Hero />
      </div>
      <section className="container">
        {recipes &&
          recipes.map((recipe) => {
            return <div>{recipe.title}</div>;
          })}
      </section>
      <footer className="container bg-black">footer</footer>
    </section>
  );
}

export default App;
