import { Recipe } from "../types/recipes";
import RecipeIngredientComponent from "./recipeIngredient";

type RecipeComponentProps = {
  recipe: Recipe;
};

const RecipeComponent = ({ recipe }: RecipeComponentProps) => {
  return (
    <div>
      <p>{recipe.name}</p>
      <p>{recipe.desc}</p>

      <ul>
        {recipe.ingredients.map((ingredient, i) => (
          <li key={i}>
            <RecipeIngredientComponent ingredient={ingredient} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeComponent;
