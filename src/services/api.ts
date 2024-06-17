import axios from 'axios';
import { Recipe } from '../types/recipe';

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL,
  params: {
    apiKey,
  },
});

export const getRecipes = async (number = 10) => {
  try {
    const response = await api.get('/random', {
      params: {
        apiKey,
        number,
      },
    });
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  try {
    const response = await api.get('/complexSearch', {
      params: {
        apiKey,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};
