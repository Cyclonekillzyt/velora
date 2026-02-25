const ProductsCard = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group">

      <div className="aspect-square overflow-hidden">
        <img
          src={data.image[0]}
          alt={data.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-gray-800 text-sm md:text-base">
          {data.name}
        </h2>

        <p className="text-gray-500 text-xs">{data.category}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-gray-900">GH₵ {data.prices}</span>

          {data.isNew && (
            <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
              NEW
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
