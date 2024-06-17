interface RecipeCardProps {
  title: string;
  image: string;
  className?: string;
}

const RecipeCard = ({ title, image, className }: RecipeCardProps) => {
  return (
    <article className="flex flex-col gap-5 p-5">
      <figure className="overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </figure>
      <h5>{title}</h5>
    </article>
  );
};

export default RecipeCard;
