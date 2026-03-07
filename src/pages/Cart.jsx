import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import PaymentSlip from "../components/PaymentSlip";

const Cart = () => {
  const { finalProduct , cart} = useCart();
  
  return (
    <div className="gap-10 w-full  mx-auto  max-h-screen border  px-6 md:px-12 py-20 ">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="w-full h-full flex gap-10">
        <div className="w-full h-[85vh] overflow-scroll flex flex-col gap-10">
          {cart.length === 0 ? (
            <p className="">Your cart is empty</p>
          ) : (
            finalProduct.map((el) => <CartItem item={el} key={el._id} />)
          )}
        </div>
        <div className=" w-120 lg:h-80 md:h-95 h-110">
          <PaymentSlip data={finalProduct} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
