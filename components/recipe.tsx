import { Recipe } from "../types/recipes";
import RecipeIngredientComponent from "./recipeIngredient";

type RecipeComponentProps = {
  recipe: Recipe;
};

const RecipeComponent = ({ recipe }: RecipeComponentProps) => {
  return (
    <div className="my-5">
      <p className="text-2xl">{recipe.name}</p>
      <p>{recipe.desc}</p>

      <ul>
        {recipe.ingredients.map((ingredient, i) => (
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
