import {
  GetStaticProps,
  InferGetStaticPropsType,
  NextComponentType,
  NextPage,
} from "next";
import { Recipe } from "../types/recipes";
import RecipesComponent from "../components/recipes";
import Head from "next/head";
import { apiUrl } from "../config";

export const getServerSideProps: GetStaticProps = async (context) => {
  const res = await fetch(apiUrl + "/api/recipes");
  const recipes: Recipe[] = await res.json();

  return {
    props: {
      recipes,
    },
  };
};

const RecipesPage: NextPage<NextComponentType> = ({
  recipes,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Recipies | My Cooklist</title>
        <meta name="description" content="A list of custom recipies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <h1 className="text-5xl">Recipes (for one)</h1>
        <RecipesComponent recipes={recipes} />
      </div>
    </>
  );
};

export default RecipesPage;
