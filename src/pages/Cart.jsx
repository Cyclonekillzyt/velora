import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import products from "../data/data";

const Cart = () => {
  const { cart } = useCart();

  const finalProduct = cart.map((el) => {
    const productData = products.find((item) => item._id === el._id);
    return {
      ...productData,
      size: el.size,
      color: el.color,
      quantity: el.quantity,
    };
  });


  return (
    <div className="pt-20 gap-10 w-6/9  mx-auto  max-h-screen  px-6 md:px-12 py-20 ">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="w-full h-[85vh] overflow-scroll flex flex-col gap-10">
        {cart.length === 0 ? (
          <p className="">Your cart is empty</p>
        ) : (
          finalProduct.map((el) => <CartItem item={el} key={el._id} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
