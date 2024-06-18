import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import {
  getRecipes,
  searchRecipes,
  getRecipesByIngredients,
} from './services/api';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Recipe } from './types/recipe';
import useScrollTo from './hooks/useScrollTo';

import './App.css';
import RecipeList from './components/Recipes/RecipeList';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollToSection = useScrollTo();

  const handleResize = () => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  };

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

  const handleSearchOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
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
        } else {
          return;
        }
        setRecipes(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };
  const handleSearchOnClick = async (inputValue: string) => {
    if (inputValue === '') {
      fetchRecipes();
    } else {
      setLoading(true);
      try {
        const ingredientsList = inputValue
          .split(',')
          .map((item) => item.trim());
        const data = await getRecipesByIngredients(ingredientsList);
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
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative flex w-full flex-col overflow-hidden">
      <div className="absolute left-0 top-0 -z-10 h-screen w-full bg-pale-orange lg:w-2/3"></div>
      <Header ref={headerRef} />
      <main className="flex w-full flex-col">
        <div
          className="relative flex w-full flex-col"
          style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
        >
          <Hero scrollToSection={() => scrollToSection(sectionRef)} />
        </div>
        <section
          ref={sectionRef}
          className="container flex flex-col items-center gap-y-8 py-10"
        >
          <h3 className="text-3xl">
            Ready for a culinary adventure? Let's get cooking!
          </h3>
          <Search
            searchTerm={searchTerm}
            searchBy={searchBy}
            setSearchBy={setSearchBy}
            onChange={handleSearchOnChange}
            onClickSearch={handleSearchOnClick}
          />

          {loading && <p>Loading...</p>}
          {!loading && recipes && <RecipeList recipes={recipes} />}
          {!loading && recipes.length === 0 && searchTerm !== '' && (
            <p>No results found</p>
          )}
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default App;
