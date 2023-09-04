import React, { useState } from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/home" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Simple Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Simple
            </span>
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="block text-gray-700 hover:text-blue-700 focus:text-blue-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5C2.44772 5 2 5.44772 2 6V7C2 7.55228 2.44772 8 3 8C3.55228 8 4 7.55228 4 7V6C4 5.44772 3.55228 5 3 5ZM2 10C2 9.44772 2.44772 9 3 9C3.55228 9 4 9.44772 4 10V11C4 11.5523 3.55228 12 3 12C2.44772 12 2 11.5523 2 11V10ZM2 14C2 13.4477 2.44772 13 3 13C3.55228 13 4 13.4477 4 14V15C4 15.5523 3.55228 16 3 16C2.44772 16 2 15.5523 2 15V14ZM20 5C20.5523 5 21 5.44772 21 6V7C21 7.55228 20.5523 8 20 8C19.4477 8 19 7.55228 19 7V6C19 5.44772 19.4477 5 20 5ZM21 10C21 9.44772 20.5523 9 20 9C19.4477 9 19 9.44772 19 10V11C19 11.5523 19.4477 12 20 12C20.5523 12 21 11.5523 21 11V10ZM21 14C21 13.4477 20.5523 13 20 13C19.4477 13 19 13.4477 19 14V15C19 15.5523 19.4477 16 20 16C20.5523 16 21 15.5523 21 15V14Z"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:w-auto md:flex md:items-center`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="signup"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
