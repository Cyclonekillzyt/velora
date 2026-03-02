import logo from '../assets/PPlogo.png'
const PaymentSlip = ({ data }) => {
  const TotalPrice = data.reduce((sum,item) => {
    return sum + item.prices * item.quantity;
  },0)
  console.log(data, TotalPrice)
  return (
    <div className="w-full h-full border border-gray-300 shadow-lg rounded-xl flex flex-col p-5 gap-2">
      <div className="flex justify-between text-xl font-medium">
        <p>Sub total</p>
        <p>GH₵{TotalPrice}</p>
      </div>
      <p className="text-sm text-gray-500 wrap-break-word">
        Shipping & taxes are calculated at checkout. Have a promo code? Enter it
        at the next step.
      </p>
      <button className="rounded-2xl py-3.5 bg-blue-700 text-white hover:bg-blue-800 transition-all duration-500 cursor-pointer mt-3 shadow-md">
        Checkout
      </button>
      <button className="rounded-2xl py-3 border border-gray-300 text-white hover:bg-gray-100 transition-all duration-500 cursor-pointer shadow-md flex items-center justify-center mt-1">
        <img src={logo} />
      </button>
      <div className='mt-3'>
        <span>30 Day Make It Right Policy.</span>{" "}
        <a href="#" className="underline">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default PaymentSlip