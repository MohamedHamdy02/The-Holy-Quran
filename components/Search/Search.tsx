import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  searchInput: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
};

const Search = ({ searchInput, onChangeHandler }: Props) => {
  return (
    <div className="relative text-center w-[81%] m-auto mt-20">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <AiOutlineSearch className="w-6 h-6 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        type="search"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        value={searchInput}
        onChange={(e: any) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default Search;
