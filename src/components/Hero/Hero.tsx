import Button from '../Button';
import FoodDish from '../../assets/images/food-dish.png';

interface HeroProps {
  scrollToSection: () => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <article className="container flex flex-1 flex-col-reverse justify-end gap-y-5 py-5 md:justify-center lg:flex-row">
      <section className="flex flex-col items-start gap-y-5 lg:max-w-[50%] lg:justify-center">
        <h2 className="text-4xl lg:mb-5 lg:text-5xl">
          Your gateway to flavorful adventures!
        </h2>
        <p className="text-xl lg:text-2xl">
          Dive into a delightful world of flavors and fun! Discover new recipes,
          experiment with ingredients, and create mouth-watering dishes.
        </p>
        <Button className="w-full md:w-fit" onClick={scrollToSection}>
          Explore Recipes
        </Button>
      </section>
      <figure className="max-w-[70%] self-center">
        <img src={FoodDish} alt="Local Example" />
      </figure>
    </article>
  );
};

export default Hero;
