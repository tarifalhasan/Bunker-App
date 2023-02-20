import React, { useState } from 'react';
import { TbGridDots } from 'react-icons/tb';
import { MdOutlineUpload } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import ApplicationModal from '../pages/utility/Dropdown/BunkerApplication';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { RxHamburgerMenu } from 'react-icons/rx';
function Header({ sidebarOpen, setSidebarOpen }) {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

  // appliction moadal open
  const applictionModalHandler = () => {
    setApplicationModalOpen(!applicationModalOpen);
  };

  return (
    <>
      <header className="bg-skin-primary z-50 text-white px-3 items-center flex justify-between h-16  fixed inset-0">
        {/* Header Left Sider */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="logo">
            <NavLink to="/"> Storage Bunker</NavLink>
          </div>

          <div className="flex  items-center space-x-2">
            <button className="relative p-1 rounded-md">
              <button
                id="dropdownDelayButton"
                className="text-white    focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5  inline-flex items-center  hover:bg-skin-muted  "
                type="button"
              >
                <TbGridDots
                  onClick={applictionModalHandler}
                  size={30}
                  className="cursor-pointer hidden lg:block"
                />
              </button>
              {applicationModalOpen ? <ApplicationModal /> : null}

              <RxHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setSidebarOpen(!sidebarOpen);
                }}
                size={25}
                className="lg:hidden"
              />
            </button>

            <form>
              <label
                htmlFor="default-search"
                className="mb-text-sm font-medium sr-only text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 w-full left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full  pl-10 text-sm  border border-gray-300 rounded-lg  focus:ring-blue-500 bg-transparent focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search "
                  required=""
                />
              </div>
            </form>
          </div>
        </div>

        {/* Hamburger button */}

        <div className="flex md:hidden items-center space-x-1">
          <RxHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            size={25}
          />
          <h2>Drive</h2>
        </div>
        <div className="left_side hidden  md:block">
          <ul className="flex space-x-3 items-center">
            <li className="flex text-skin-brightPurple px-4 space-x-2 py-1 border-skin-brightPurple items-center border  rounded-lg">
              <MdOutlineUpload size={25} />
              <NavLink to="/upgrade">Upgrade</NavLink>
            </li>
            <li className="p-2 rounded-lg hover:bg-skin-muted">
              <Link to={'/settings'}>
                <FiSettings size={20} />
              </Link>
            </li>
            <span className="w-[2px] h-10 bg-skin-muted"></span>
            <Link
              to={'/profile'}
              className="profile  cursor-pointer flex space-x-1 items-center"
            >
              <div className="hidden lg:flex flex-col ">
                <span className="text-xs">tarifalhasan</span>
                <span className="text-[0.6em] text-skin-weak">
                  tarifalhasan999@gmail.com
                </span>
              </div>
              <div className="logo  bg-transparent hover:bg-skin-muted relative  w-8 h-8 rounded-lg text-white border border-skin-darkBlue">
                <span className="flex items-center justify-center ">T</span>
              </div>
            </Link>
          </ul>
        </div>
        {/* Mobile menu */}
        <div className="block md:hidden">
          <ul className="flex space-x-3 items-center">
            <li className="flex text-skin-brightPurple px-1 space-x-2 py-1 border-skin-brightPurple items-center border  rounded-lg">
              <MdOutlineUpload size={25} />
            </li>
            <li className="p-2 rounded-lg hover:bg-skin-muted">
              <Link to={'/'}>
                <FiSettings size={20} />
              </Link>
            </li>
            <span className="w-[2px] h-10 bg-skin-muted"></span>
            <Link
              to={'/'}
              className="profile  cursor-pointer flex space-x-1 items-center"
            >
              <div className="hidden lg:flex flex-col ">
                <span className="text-xs">tarifalhasan</span>
                <span className="text-[0.6em] text-skin-weak">
                  tarifalhasan999@gmail.com
                </span>
              </div>
              <div className="logo  bg-transparent hover:bg-skin-muted relative  w-8 h-8 rounded-lg text-white border border-skin-darkBlue">
                <span className="flex items-center justify-center ">T</span>
              </div>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
