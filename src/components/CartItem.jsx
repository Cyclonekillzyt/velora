import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { IoMdTrash } from "react-icons/io";
import { useCart } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const cartData = {
    _id: item._id,
    size: item.size,
    color: item.color,
    quantity: item.quantity,
  };
  return (
    <div className="w-full h-[50%] flex gap-5 p-2">
      <img
        src={item.image[item.color]}
        className="rounded-2xl border border-gray-200 shadow-md"
      />
      <div className="w-[50%] ">
        <div className="flex justify-between">
          <p className="text-lg font-medium">{item.name}</p>
          <p className="text-lg font-medium">GH₵{item.prices}</p>
        </div>
        <p className="text-lg font-medium">{item.category}</p>
        <p className="text-md text-gray-500">{item.description}</p>
        <p className="text-md text-gray-500">Size: {item.size}</p>
        <p className="text-md text-gray-500">
          Color: {item.colors[item.color]}
        </p>
        <div className="flex gap-1 items-center">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit shadow-sm mt-5">
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
            className="mt-4 flex items-center gap-2 text-gray-500 hover:text-red-600 transition group"
          >
            <IoMdTrash className="text-3xl group-hover:scale-110 transition-transform" />
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
