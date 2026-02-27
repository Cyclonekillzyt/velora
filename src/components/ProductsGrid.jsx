import ProductsCard from "./ProductsCard";
import FilterBar from "./FilterBar";
import { useApp } from "../contexts/AppContext";

const ProductsGrid = () => {
  const { filteredProducts } = useApp();
  return (
    <div className="w-full min-h-screen bg-gray-100 px-6 md:px-12 py-20">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Our Collection</h1>
        <FilterBar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((el, index) => (
          <ProductsCard data={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
