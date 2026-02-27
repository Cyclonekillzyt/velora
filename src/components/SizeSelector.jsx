import { useProducts } from "../contexts/ProductsContext"


const SizeSelector = ({ text }) => {
  const { orderSize, setOrderSize } = useProducts();
  const isActive = text === orderSize;
  const setSize = () => {
    setOrderSize(text);
  }
  return (
    <button
      className={`w-full shadow-2xs py-[5%] flex justify-center items-center transition rounded-lg h-12 ${isActive ? "border-2 border-blue-600" : "border border-gray-300"} cursor-pointer`}
      onClick={setSize}
    >
      {text}
    </button>
  );
} 

export default SizeSelector