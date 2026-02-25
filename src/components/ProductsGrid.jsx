import ProductsCard from "./ProductsCard";
import products from "../data/data.js";

const ProductsGrid = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 px-6 md:px-12 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Our Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((el, index) => (
          <ProductsCard data={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
