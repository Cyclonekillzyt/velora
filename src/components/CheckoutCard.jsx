const CheckoutCard = ({ item }) => {
  console.log(item);
  return (
    <div className=" w-full flex shrink flex-col lg:flex-row gap-4 p-3">
      <img
        src={item.image[item.color]}
        alt={item.name}
        className="w-full lg:w-40 lg:h-40 object-cover rounded-2xl border border-gray-200 shadow-md"
      />

      <div className="flex flex-col w-full ">
        <div className="flex justify-between items-start">
          <p className="text-base lg:text-lg font-medium">{item.name}</p>
          <p className="text-base lg:text-lg font-semibold">GH₵{item.prices}</p>
        </div>

        <p className="text-sm lg:text-base font-medium">{item.category}</p>

        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>

        <p className="text-sm text-gray-500">Size: {item.size}</p>

        <p className="text-sm text-gray-500">
          Color: {item.colors[item.color]}
        </p>
        
        <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                    <button
                      className="px-3 py-2 hover:bg-gray-100 active:scale-95 transition"
                      onClick={() => decreaseQuantity(cartData)}
                    >
                      <LuMinus className="text-gray-600" />
                    </button>
        
                    <span className="px-4 py-2 text-sm font-medium min-w-10 text-center">
                      {item.quantity}
                    </span>
        
                    <button
                      className="px-3 py-2 hover:bg-gray-100 active:scale-95 transition"
                      onClick={() => increaseQuantity(cartData)}
                    >
                      <GoPlus className="text-gray-600" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(cartData)}
                    className="flex items-center text-gray-500 hover:text-red-600 transition"
                  >
                    <IoMdTrash className="text-2xl lg:text-3xl hover:scale-110 transition-transform" />
                  </button>
                </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
