import Link from "next/link";

const HeaderComponent = ({}) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/recipes">
        <a>Recipes</a>
      </Link>
    </div>
  );
};

export default HeaderComponent;
