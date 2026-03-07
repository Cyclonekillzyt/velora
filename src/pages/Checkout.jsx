import { useState } from "react";
import { countries } from "../data/data.js";
import { RiVisaLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";
import payPal from "../assets/PPlogo.webp";
import { useCart } from "../contexts/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import { deliveryServices } from "../data/data.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Ghana");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("DHL");
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [paypalEmail, setPaypalEmail] = useState("");
  const [applePayEmail, setApplePayEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const { finalProduct, setCheckoutStat, setCart } = useCart();
  const Subtotal = finalProduct.reduce((sum, item) => {
    return sum + item.prices * item.quantity;
  }, 0);
  const cartNavigate = () => {
    navigate("/cart");
    setCheckoutStat(false);
  };

  const deliveryPrice = deliveryServices.find(
    (item) => item.name === deliveryMethod,
  )?.price;

  const total = Subtotal + deliveryPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    setCart([]);
    toast.success("Order Successful");
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center md:text-left">
        Checkout
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        <form
          className="md:w-1/2 h-full flex flex-col gap-8 bg-white p-6 rounded-lg shadow-md"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
          {inputMaker("Email", "email", email, setEmail)}
          {inputMaker("Full Name", "text", name, setName)}
          {inputMaker("Address", "text", address, setAddress)}
          {inputMaker("City", "text", city, setCity)}
          {inputMaker("Post Code", "text", postCode, setPostCode)}
          {inputMaker("Country", "select", country, setCountry, countries)}

          <div>
            <h2 className="text-xl font-semibold mb-3">Delivery Method</h2>
            <div className="flex flex-col gap-3">
              {deliveryServices.map((method, key) => (
                <label
                  key={key}
                  className={`flex items-center justify-between p-3 border rounded cursor-pointer
                    ${deliveryMethod === method.name ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      value={method.name}
                      checked={deliveryMethod === method.name}
                      onChange={() => setDeliveryMethod(method.name)}
                      className="w-4 h-4 accent-blue-500"
                      required
                    />
                    <div>
                      <p className="font-medium">{method.name}</p>
                      <p className="text-sm text-gray-500">{method.duration}</p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    GH₵ {method.price.toLocaleString()}
                  </p>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Payment Method</h2>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod("PayPal")}
                className={`flex items-center justify-center gap-2 p-3 border rounded-lg shadow-sm hover:shadow-md transition w-36 h-14
                ${paymentMethod === "PayPal" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
              >
                <img src={payPal} alt="PayPal" className="h-8 object-contain" />
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("Visa")}
                className={`flex items-center justify-center gap-2 p-3 border rounded-lg shadow-sm hover:shadow-md transition w-36 h-14
                ${paymentMethod === "Visa" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
              >
                <RiVisaLine size={36} className="text-blue-600" />
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("ApplePay")}
                className={`flex items-center justify-center gap-2 p-3 border rounded-lg shadow-sm hover:shadow-md transition w-36 h-14
                ${paymentMethod === "ApplePay" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
              >
                <FaApplePay size={36} />
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("MobileMoney")}
                className={`flex items-center justify-center gap-2 p-3 border rounded-lg shadow-sm hover:shadow-md transition w-36 h-14
                ${paymentMethod === "MobileMoney" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
              >
                Mobile Money
              </button>
            </div>

            {paymentMethod === "Visa" && (
              <div className="mt-6 flex flex-col gap-4 bg-gray-50 p-4 rounded border border-gray-200">
                <h3 className="font-semibold">Card Details</h3>
                {inputMaker("Cardholder Name", "text", cardName, setCardName)}
                {inputMaker("Card Number", "text", cardNumber, setCardNumber)}
                <div className="flex gap-4">
                  {inputMaker("Expiry Date", "text", expiry, setExpiry)}
                  {inputMaker("CVV", "text", cvv, setCvv)}
                </div>
              </div>
            )}

            {paymentMethod === "PayPal" && (
              <div className="mt-4">
                {inputMaker(
                  "PayPal Email",
                  "email",
                  paypalEmail,
                  setPaypalEmail,
                )}
              </div>
            )}

            {paymentMethod === "ApplePay" && (
              <div className="mt-4">
                {inputMaker(
                  "Apple Pay Email",
                  "email",
                  applePayEmail,
                  setApplePayEmail,
                )}
              </div>
            )}

            {paymentMethod === "MobileMoney" && (
              <div className="mt-4">
                {inputMaker(
                  "Mobile Money Number",
                  "text",
                  mobileNumber,
                  setMobileNumber,
                )}
              </div>
            )}
          </div>

          <button
            className="mt-6 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            type="submit"
          >
            Complete Purchase
          </button>
        </form>

        <div className="md:w-1/2 h-full bg-white p-6 rounded-lg shadow-md flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Order Summary</h2>
            <p
              className="text-sm text-gray-500 underline hover:text-gray-700 cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={cartNavigate}
            >
              Edit the Order
            </p>
          </div>
          <div>
            {finalProduct.map((el, index) => (
              <CartItem item={el} key={index} />
            ))}
          </div>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>GH₵{Subtotal.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery</p>
            <p>GH₵{deliveryPrice.toLocaleString()}</p>
          </div>
          <div className="border-t mt-2 pt-2 flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>GH₵{total.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputMaker = (label, type, value, setValue, countries) => {
  const id = label.replace(/\s+/g, "");

  return (
    <div className="flex flex-col gap-1 flex-1">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>

      {type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none"
        >
          {countries?.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      )}
    </div>
  );
};

export default Checkout;
