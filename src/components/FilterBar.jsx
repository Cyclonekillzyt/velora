import { useApp } from "../contexts/AppContext";

const FilterBar = () => {
  const cats = ["Tees", "Hoodies", "New", "All"];
  const { setCategory, category } = useApp();

  function filter(value) {
    setCategory(value.toLowerCase());
  }
  function filterButton(text, index) {
    return (
      <div
        key={index}
        className=" h-9 px-5 flex items-center justify-center text-sm font-semibold  rounded-full bg-gray-100 text-gray-800 border border-transparent hover:border-gray-400 hover:bg-gray-200 hover:shadow-md active:scale-95  transition-all duration-200 ease-in-out cursor-pointer"
        onClick={() => filter(text)}
      >
        {text}
      </div>
    );
  }

  return (
    <div className="w-1/2 flex py-1 justify-end h-12 gap-6 px-3">
      {cats.map((el, index) => filterButton(el, index))}
    </div>
  );
};

export default FilterBar;
