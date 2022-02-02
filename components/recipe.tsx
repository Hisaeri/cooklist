import { Recipe, RecipeIngredient } from "../types/recipes";
import RecipeIngredientComponent from "./recipeIngredient";

type RecipeComponentProps = {
  recipe: Recipe;
};

const RecipeComponent = ({ recipe }: RecipeComponentProps) => {
  const numberOfPeople = 1;

  const receiptIngredients = recipe.ingredients.map((i: RecipeIngredient) => {
    return { ...i, quantity: i.quantity * numberOfPeople };
  });

  return (
    <div className="my-5">
      <p className="capitalize text-2xl">{recipe.name}</p>
      <p className="capitalize">{recipe.desc}</p>

      <ul>
        {receiptIngredients.map((ingredient, i) => (
          <li className="pl-6" key={i}>
            {"- "}
            <RecipeIngredientComponent ingredient={ingredient} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeComponent;
