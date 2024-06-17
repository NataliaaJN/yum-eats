import RecipeCard from './RecipeCard';

import { Recipe } from '../../types/recipe';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
