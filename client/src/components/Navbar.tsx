import { Link } from "react-router-dom";
import { useState } from "react";

const navItem = [
  {
    Name: "Home",
    URL: "/",
  },
  {
    Name: "Login",
    URL: "/login",
  },
];

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mx-[2rem] h-[80px]">
        <h2 className="lg:text-3xl text-2xl tracking-wide">
          <Link to="/">Blog Platform</Link>
        </h2>
        <ul className="lg:flex hidden">
          {navItem &&
            navItem.map((item) => {
              return (
                <li className="mr-[2rem] uppercase">
                  <Link to={item.URL}>{item.Name}</Link>
                </li>
              );
            })}
        </ul>
        <div className="lg:hidden flex">
          {mobileNav ? (
            <div>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white relative"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                onClick={() => setMobileNav(!mobileNav)}
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                onClick={() => setMobileNav(!mobileNav)}
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
