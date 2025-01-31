import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => setSearchOpen((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white border-gray-200 dark:bg-zinc-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg width="36" height="36" viewBox="0 0 36 30" fill="#EDEDED" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5983 8.55217L28.0761 15.1086L35.848 22.9212C36.0507 23.1248 36.0507 23.4571 35.848 23.6608L29.6936 29.8472C29.491 30.0509 29.1605 30.0509 28.9579 29.8472L24.0399 24.9036H10.475C10.3319 24.9036 10.2086 24.8522 10.1072 24.7504L1.40356 16.0012C1.25161 15.8485 1.20854 15.631 1.2908 15.4314C1.37298 15.2318 1.55658 15.1085 1.77145 15.1085H28.076L22.7901 9.79498H9.22533C9.08209 9.79498 8.95878 9.74361 8.85745 9.64174L0.153858 0.892745C0.00190388 0.739899 -0.0411689 0.522362 0.0410993 0.322816C0.12327 0.12327 0.30678 0 0.521742 0H26.6108C26.7541 0 26.8774 0.0512646 26.9787 0.15313L34.5983 7.81256C34.801 8.01629 34.801 8.34844 34.5983 8.55217Z"></path></svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SoleSync
          </span>
        </a>

        <div className="flex md:order-2">
          {/* Search Button for Mobile */}
          <button
            type="button"
            onClick={toggleSearch}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          {/* Search Input for Desktop */}
          <div className={`relative ${isSearchOpen ? "block" : "hidden"} md:block`}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search Courses"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Menu */}
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/home"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white  hover:text-white transition-all ease-in-out duration-300 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/yourOrders"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-700 md:p-0 md:dark:hover:text-zinc-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  hover:text-white transition-all ease-in-out duration-300 "
              >
               YourOrders
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-700 md:p-0 md:dark:hover:text-zinc-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  hover:text-white transition-all ease-in-out duration-300 "
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
