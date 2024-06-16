import axios from 'axios';

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
