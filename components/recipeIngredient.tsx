import { RecipeIngredient } from "../types/recipes";

type RecipeIngredientComponentProps = {
  ingredient: RecipeIngredient;
};

const RecipeIngredientComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  return (
    <>
      {ingredient.name} ({ingredient.quantity + " grams"}){" "}
    </>
  );
};

export default RecipeIngredientComponent;
