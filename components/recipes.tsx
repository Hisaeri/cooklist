import { Recipe } from "../types/recipes";
import RecipeComponent from "./recipe";

type RecipesComponentProps = {
  recipes: Recipe[];
};

const RecipesComponent = ({ recipes }: RecipesComponentProps) => {
  return (
    <div>
      <ul>
        {recipes.map((recipe, i) => (
          <li key={i}>
            <RecipeComponent recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesComponent;
