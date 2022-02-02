import { RecipeIngredient } from "../types/recipes";

type RecipeIngredientComponentProps = {
  ingredient: RecipeIngredient;
};

const RecipeIngredientComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  return <>{ingredient.name}</>;
};

export default RecipeIngredientComponent;
