import Link from "next/link";

const HeaderComponent = ({}) => {
  return (
    <div>
      <div className="container mx-auto">
        <Link href="/">
          <a className="pr-5">Home</a>
        </Link>
        <Link href="/recipes">
          <a className="pr-5">Recipes</a>
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
