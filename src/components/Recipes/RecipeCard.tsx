import { FC } from 'react';

interface RecipeCardProps {
  title: string;
  image: string;
  className?: string;
}

const RecipeCard: FC<RecipeCardProps> = ({ title, image, className }) => {
  return (
    <article className="flex flex-col gap-5 p-5">
      <figure className="overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </figure>
      <h5>{title}</h5>
    </article>
  );
};

export default RecipeCard;
