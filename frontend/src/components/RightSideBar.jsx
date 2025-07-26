import React from "react";
import { CiSearch } from "react-icons/ci";
import AvatarComp from "./AvatarComp";
import ChatProfile from "./ChatProfile";
import { AiOutlineMessage } from "react-icons/ai";
import { AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function RightSideBar() {
  const [, { toggle }] = useDisclosure();
  return (
    <>
      {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="fixed right-2 top-0 inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <AiOutlineMessage style={{ fontSize: "1.5rem", color: "gray" }} />
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 right-0 z-40 w-80 h-screen transition-transform translate-x-full lg:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-2 space-y-5 overflow-y-auto bg-white dark:bg-gray-800"></div>
      </aside> */}
      <AppShell
        padding="md"
        header={{ height: 60 }}
        transitionDuration={500}
        transitionTimingFunction="ease"
        navbar={{
          width: 300,
          breakpoint: "sm",
          // collapsed: { mobile: !opened },
        }}
      >
        <Burger
          // opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          className="m-3 fixed right-2 top-0 lg:hidden"
        />

        <AppShell.Aside className="space-y-2 translate-x-80 md:translate-x-0 px-5 py-2">
          <div className="flex justify-end mr-2 items-center gap-4">
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
            </div>
            <AvatarComp />
          </div>
          <div>
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch style={{ fontSize: "1.2rem", color: "gray" }} />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-400 focus:border-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Stories"
                  required=""
                />
              </div>
            </form>
          </div>
          <div className="flex gap-3">
            <div>
              <AvatarComp name={"Ahmed"} />
              <span className="bg-white shadow-xl px-2 pb-0.5 py text-xl relative bottom-14 left-4 text-pink-400 rounded-4xl">
                +
              </span>
            </div>
            <AvatarComp name={"Bilal"} />
            <AvatarComp name={"Umer"} />
            <AvatarComp name={"Ali"} />
          </div>
          <div className="space-y-4">
            <p className="text-lg font-semibold text-slate-800">Recent Chats</p>
            <ul className="space-y-5 pr-4">
              <ChatProfile />
              <ChatProfile />
              <ChatProfile />
              <ChatProfile />
              <ChatProfile />
            </ul>
          </div>
        </AppShell.Aside>
      </AppShell>
    </>
  );
}

export default RightSideBar;
