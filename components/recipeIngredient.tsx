import { RecipeIngredient } from "../types/recipes";

type RecipeIngredientComponentProps = {
  ingredient: RecipeIngredient;
};

const RecipeIngredientComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  return <div>{ingredient.name}</div>;
};

export default RecipeIngredientComponent;
