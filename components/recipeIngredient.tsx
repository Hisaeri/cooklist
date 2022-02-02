import { RecipeIngredient } from "../types/recipes";

type RecipeIngredientComponentProps = {
  ingredient: RecipeIngredient;
};

const RecipeIngredientComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  return (
    <>
      <span className="capitalize pr-1">{ingredient.name}:</span>
      <RecipeIngredientQuantityInGramsComponent ingredient={ingredient} />
      <RecipeIngredientQuantityInUnitComponent ingredient={ingredient} />
    </>
  );
};

const RecipeIngredientQuantityInUnitComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  const quantity = ingredient.quantity / ingredient.unitQuantity;
  const plural = quantity > 1 ? true : false;
  let unitName = ingredient.unitName ? ingredient.unitName : ingredient.name;
  if (plural && ingredient.pluralUnitName) {
    unitName = ingredient.pluralUnitName;
  } else if (plural) {
    unitName = unitName + "s";
  }
  return <>{" (" + quantity + " " + unitName + ") "}</>;
};

const RecipeIngredientQuantityInGramsComponent = ({
  ingredient,
}: RecipeIngredientComponentProps) => {
  const gramName = ingredient.quantity > 1 ? "grams" : "gram";
  return <>{ingredient.quantity + " " + gramName}</>;
};

export default RecipeIngredientComponent;
