import { RecipeIngredient } from "../types/recipes";

type RecipeIngredientComponentProps = {
  ingredient: RecipeIngredient;
};

const RecipeIngredientComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  const isDisplayedInUnit = ingredient.unitName ? true : false;

  return (
    <>
      {ingredient.name + " "}
      <RecipeIngredientQuantityComponent ingredient={ingredient} />
    </>
  );
};

const RecipeIngredientQuantityComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  const isDisplayedInUnit = ingredient.unitName ? true : false;

  if (isDisplayedInUnit) {
    return (
      <>
        <RecipeIngredientQuantityInUnitComponent ingredient={ingredient} />
      </>
    );
  } else {
    return (
      <>
        <RecipeIngredientQuantityInGramsComponent ingredient={ingredient} />
      </>
    );
  }
};

const RecipeIngredientQuantityInUnitComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  const unitName =
    ingredient.quantity > 1 ? ingredient.unitName + "s" : ingredient.unitName;
  return <>{ingredient.quantity + " " + unitName}</>;
};

const RecipeIngredientQuantityInGramsComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  const gramName = ingredient.quantity > 1 ? "grams" : "gram";
  return <>{ingredient.quantity + " " + gramName}</>;
};

export default RecipeIngredientComponent;
