import velora from "../assets/velora.png";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault()
  };
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="w-full h-16 bg-white flex items-center justify-between px-4  gap-15 ">
      <div className="min-w-[25%]">
        <img src={velora} className="w-50" />
      </div>
      <div className="flex-1 hidden lg:flex">
        <form
          onSubmit={(e) => handleSearch(e)}
          className="self-center h-full w-full relative"
        >
          <CiSearch
            size="20"
            className="absolute top-[28%] left-[3%] text-gray-500"
          />
          <input
            className="w-full rounded-4xl pt-2 pb-2.5 px-10 bg-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            type="search"
            placeholder="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit"></button>
        </form>
      </div>
      <div className="min-w-[30%] hidden lg:flex h-full  items-center justify-end  gap-10 pr-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <CiShoppingCart size="25" />
          <p>Chart</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <CiHeart size="25" />
          <p>Favorites</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <CiUser size="25" />
          <p>Account</p>
        </div>
      </div>
      <div className="lg:hidden min-w-[30%] h-full flex items-center justify-end  pr-10">
        <CiMenuBurger
          size="25"
          className="self-center cursor-pointer"
          onClick={toggle}
        />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggle}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black/90 flex flex-col justify-between  text-white backdrop-blur-md transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full  "}`}
      >
        <ul className="flex flex-col mt-2">
          <li className="flex items-center gap-4 px-8 py-5 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
            <CiShoppingCart size="25" />
            <p className="uppercase tracking-widest text-sm font-medium">
              Chart
            </p>
          </li>
          <li className="flex items-center gap-4 px-8 py-5 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
            <CiHeart size="25" />
            <p className="uppercase tracking-widest text-sm font-medium">
              Favorites
            </p>
          </li>
          <li className="flex items-center gap-4 px-8 py-5 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
            <CiUser size="25" />
            <p className="uppercase tracking-widest text-sm font-medium">
              Account
            </p>
          </li>
        </ul>

        <div className="w-full p-4">
          <form
            onSubmit={(e) => handleSearch(e)}
            className="self-center h-full w-full relative"
          >
            <CiSearch
              size="20"
              className="absolute top-[28%] left-[6%] text-gray-500"
            />
            <input
              className="w-full rounded-4xl pt-2 pb-2.5 px-10 bg-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent "
              type="search"
              placeholder="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
