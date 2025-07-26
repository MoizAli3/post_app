import React from "react";


function SearchBar() {
  return (
    <>
      <form className="mt-4">
        <input
          type="search"
          id="default-search"
          className="block w-91 md:w-2xl p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-400 focus:border-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Something here...."
          required=""
        />
      </form>
    </>
  );
}

export default SearchBar;
