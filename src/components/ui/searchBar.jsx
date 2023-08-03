// SearchBar.js
import { BiSearch } from "react-icons/bi";
const SearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <button className="absolute left-0 top-0 h-full px-4 text-indigo-500 hover:text-indigo-700 focus:outline-none">
          <BiSearch className="text-2xl text-gray-300" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="py-2 px-4 pl-12 border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
