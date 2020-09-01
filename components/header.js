import Link from "next/link";
// import { useState } from "react";

const Header = () => {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-blue-500">
      <div className="flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center">
          <span
            role="img"
            aria-label=""
            className="w-10 mr-3 text-xl text-center text-white"
          >
            💡
          </span>

          <Link href="/">
            <p className="text-xl font-bold text-white">
              New — a place to create new stuff!
            </p>
          </Link>
        </div>

        {/* <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" }
          ].map((navigationItem) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <p className="block text-white">{navigationItem.title}</p>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
