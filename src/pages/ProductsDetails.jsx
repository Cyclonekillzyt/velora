import { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import ColorPalletes from "../components/ColorPalltes";
import SizeSelector from "../components/SizeSelector";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const ProductsDetails = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { productDetails, setCurrentProduct, productColor, orderSize } =
    useProducts();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setCurrentProduct(id);
  }, [id, setCurrentProduct]);
  if (!productDetails) return <div>Loading...</div>;

  const addItemToCart = () => {
    const cartItem = {
      _id: productDetails._id,
      size: orderSize || "S",
      color: productColor,
      quantity: quantity,
    };

    addToCart(cartItem);
    navigate("/products");
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className=" w-full  px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="flex flex-col gap-4 w-[80%] ml-30 ">
          <img
            src={productDetails.image[productColor]}
            alt={productDetails.name}
            className="w-full  rounded-3xl object-cover shadow-lg border border-gray-200"
          />

          <button className="w-20 h-20 flex gap-3 self-center rounded-xl border-2 border-gray-300  hover:border-black transition focus:border-blue-600 object-cover cursor-pointer p-1">
            <img src={productDetails.image[productColor]} className="" />
          </button>
        </div>

        <div className="flex flex-col gap-6  pr-10 pt-10 lg:max-w-xl ">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold text-gray-900">
                {productDetails.name}
              </h1>
              <p className="text-gray-500 uppercase text-sm tracking-wide">
                {productDetails.category}
              </p>
            </div>
            <p className="text-2xl font-bold mt-2 self-start">
              GH₵{productDetails.prices}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-sm text-gray-400 ">
              Color:{" "}
              {productDetails.colors[productColor].charAt(0).toUpperCase() +
                productDetails.colors[productColor].slice(1)}
            </p>
            <div className="flex gap-3">
              {productDetails.colors.map((el, index) => (
                <ColorPalletes data={el} key={index} index={index} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-md">Size</p>
              <p className="text-gray-400 text-md">Size guide</p>
            </div>
            <div className="grid grid-cols-4 gap-5 pr-1">
              {productDetails.sizes.map((el, index) => (
                <SizeSelector text={el} key={index} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-400 text-md">Quantity</p>

            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                className="px-4 py-2 hover:bg-gray-100 transition"
              >
                −
              </button>

              <span className="px-6 py-2 font-semibold text-gray-800">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-4 py-2 hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>
          </div>

          <button
            className="mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition cursor-pointer"
            onClick={addItemToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
