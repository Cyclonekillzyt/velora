import { useProducts } from "../contexts/ProductsContext";

const ColorPalletes = ({ data , index }) => {
  const { productColor, SetProductColor } = useProducts();
  const isActive = index === productColor;
  return (
    <button type="radio"
      className={`size-7 aspect-square border-2 rounded-full transition
        ${isActive ? "border-blue-600" : "border-gray-300"}`}
      onClick={() => SetProductColor(index)}
      style={{ background: data }}
    ></button>
  );
};

export default ColorPalletes;
