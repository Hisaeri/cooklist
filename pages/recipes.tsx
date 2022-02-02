import { NextComponentType, NextPage } from "next";
import { Recipe } from "../types/recipes";
import RecipesComponent from "../components/recipes";
import Head from "next/head";

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
      <Head>
        <title>Recipies | My Cooklist</title>
        <meta name="description" content="A list of custom recipies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl">Recipes</h1>
      <RecipesComponent recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
