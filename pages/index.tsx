import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Cooklist</title>
        <meta
          name="description"
          content="Generate a groceries list from recipes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Cooklist!</h1>
        <h2>
          Cooklist is an app made with NextJS and React that generates a
          shopping list from selected recipes, for easy grocery shopping.
        </h2>
        <h3>
          {"Checkout "}
          <Link href="/recipes">
            <a>My cooklist recipes</a>
          </Link>
        </h3>
      </main>
    </div>
  );
};

export default Home;
