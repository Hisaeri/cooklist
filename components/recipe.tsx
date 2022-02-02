import { useState } from "react";
import { Recipe, RecipeIngredient } from "../types/recipes";
import RecipeIngredientComponent from "./recipeIngredient";

type RecipeComponentProps = {
  recipe: Recipe;
};

const RecipeComponent = ({ recipe }: RecipeComponentProps) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const receiptIngredients = recipe.ingredients.map((i: RecipeIngredient) => {
    return { ...i, quantity: i.quantity * numberOfPeople };
  });

  const addPerson = () => {
    if (numberOfPeople < 1000) setNumberOfPeople(numberOfPeople + 1);
  };

  const removePerson = () => {
    if (numberOfPeople > 1) setNumberOfPeople(numberOfPeople - 1);
  };

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

      <p className="mt-4">Number of people:</p>
      <button className="btn" onClick={removePerson}>
        -
      </button>
      <span className="px-2">{numberOfPeople}</span>
      <button className="btn" onClick={addPerson}>
        +
      </button>
    </div>
  );
};

export default RecipeComponent;
