import { NextComponentType, NextPage } from "next";
import { Recipe } from "../types/recipes";
import RecipesComponent from "../components/recipes";

const RecipesPage: NextPage<NextComponentType> = () => {
  const recipes: Recipe[] = [
    {
      id: 1,
      name: "Tomato salad",
      desc: "Simple salad, great in summer",
      ingredients: [
        { name: "tomato", quantity: 100 },
        { name: "salad", quantity: 100 },
      ],
    },
    {
      id: 2,
      name: "Tomato feta salad",
      ingredients: [
        { name: "tomato", quantity: 100 },
        { name: "salad", quantity: 100 },
        { name: "feta", quantity: 150 },
      ],
    },
  ];

  return (
    <div>
      <h1>Recipes</h1>

      <h2>Popular recipes</h2>
      <RecipesComponent recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
