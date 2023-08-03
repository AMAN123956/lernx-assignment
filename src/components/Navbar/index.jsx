import React from "react";
import SearchBar from "../ui/searchBar";
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-2 border-white shadow-2xl	px-8 py-4 flex items-center justify-between">
      <h1 className="text-black text-xl font-semibold">Logo</h1>
      <div className="flex items-center justify-center">
        <SearchBar />
        <GrNotification className="mx-2 border-2 border-gray p-1 text-4xl pointer" />
        <BiUser className="mx-2 border-2 border-gray p-1 text-4xl pointer" />
      </div>
      {/* Add your navigation links here */}
    </header>
  );
};

export default Navbar;
