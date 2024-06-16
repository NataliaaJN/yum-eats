import RecipeCard from './RecipeCard';

import { Recipe } from '../../types/recipe';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <section className="container grid grid-cols-4 gap-5 self-center">
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
          ></RecipeCard>
        );
      })}
    </section>
  );
};

export default RecipeList;
