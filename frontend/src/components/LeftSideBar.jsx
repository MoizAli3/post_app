import React from "react";
import { Link, Outlet } from "react-router";
import MenuList from "./MenuList";
import { GoHome, GoPeople } from "react-icons/go";
import { CiGrid41, CiBookmark, CiSettings } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";
import { TbLocationShare } from "react-icons/tb";

function LeftSideBar() {
  return (
    <>
      <>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="false"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <aside
          id="default-sidebar"
          className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-2 overflow-y-auto bg-white dark:bg-gray-800">
            <div className="flex justify-center items-center">
              {/* <img src={icon} alt="" /> */}
              <h1 className="text-3xl font-sans text-gray-500 text-center mb-5">
                MeetUp
              </h1>
            </div>
            <ul className="space-y-1 font-medium">
              <MenuList
                text={"Feed"}
                className="active:bg-pink-400"
                icon={
                  <GoHome
                    style={{
                      fontSize: "1.3rem",
                    }}
                  />
                }
              />
              <MenuList
                text={"Explore"}
                icon={
                  <CiGrid41
                    style={{
                      fontSize: "1.3rem",
                    }}
                  />
                }
              />
              <MenuList
                text={"Marketplace"}
                icon={
                  <CgShoppingBag
                    style={{
                      fontSize: "1.3rem",
                    }}
                  />
                }
              />
              <MenuList
                text={"Groups"}
                icon={
                  <GoPeople
                    style={{
                      fontSize: "1.3rem",
                    }}
                  />
                }
              />
              <MenuList
                text={"My favorities"}
                icon={
                  <CiBookmark
                    style={{
                      fontSize: "1.3rem",
                    }}
                  />
                }
              />
              <MenuList
                text={"Messages"}
                icon={
                  <TbLocationShare
                    style={{
                      fontSize: "1.3rem",
                    }}
                  />
                }
              />
              <MenuList
                text={"Settings"}
                icon={
                  <CiSettings
                    style={{
                      fontSize: "1.4rem",
                    }}
                  />
                }
              />
            </ul>
          </div>
        </aside>
      </>
    </>
  );
}

export default LeftSideBar;
