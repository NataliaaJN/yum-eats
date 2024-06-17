import axios, { AxiosInstance } from 'axios';
import { Recipe } from '../types/recipe';

const apiKey = 'b44d6f10ec444bf7bf2c01d4c367b2ff';
// const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = 'https://api.spoonacular.com/recipes';

// Axios instance with base configuration
const api: AxiosInstance = axios.create({
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

export const getRecipesByIngredients = async (
  ingredients: string[],
): Promise<Recipe[]> => {
  try {
    const response = await api.get('/findByIngredients', {
      params: {
        apiKey,
        ingredients: ingredients.join(','),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

// export const getRecipesByCategory = async (
//   category: string,
// ): Promise<Recipe[]> => {
//   try {
//     const response = await api.get('/complexSearch', {
//       params: {
//         apiKey,
//         type: category,
//       },
//     });
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching recipes by category:', error);
//     throw error;
//   }
// };
