import logo from "../assets/PPlogo.webp";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
const PaymentSlip = ({ data }) => {
  const { setCheckoutStat } = useCart();
  const navigate = useNavigate();
  const Subtotal = data.reduce((sum, item) => {
    return sum + item.prices * item.quantity;
  }, 0);
  const checkoutNavigate = () => {
    navigate("/checkout");
    setCheckoutStat(true);
  };
  console.log(data, Subtotal);
  return (
    <div className="w-full h-full border border-gray-300 shadow-lg rounded-xl flex flex-col p-5 gap-2">
      <div className="flex justify-between text-xl font-medium">
        <p>Sub total</p>
        <p>GH₵{Subtotal}</p>
      </div>
      <p className="text-sm text-gray-500 wrap-break-word">
        Shipping & taxes are calculated at checkout. Have a promo code? Enter it
        at the next step.
      </p>
      {data.length === 0 ? (
        <button className="rounded-2xl py-3.5 bg-gray-400 text-white hover:bg-gray-500 transition-all duration-500 cursor-pointer mt-3 shadow-md">
          Checkout
        </button>
      ) : (
        <button
          className="rounded-2xl py-3.5 bg-blue-700 text-white hover:bg-blue-800 transition-all duration-500 cursor-pointer mt-3 shadow-md"
          onClick={checkoutNavigate}
        >
          Checkout
        </button>
      )}

      <button className="rounded-2xl py-3 border border-gray-300 text-white hover:bg-gray-100 transition-all duration-500 cursor-pointer shadow-md flex items-center justify-center mt-1">
        <img src={logo} />
      </button>
      <div className="mt-3 pb-3 border-b border-gray-300 text-sm text-gray-500">
        <span>30 Day Make It Right Policy.</span>{" "}
        <a href="#" className="underline">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default PaymentSlip;
