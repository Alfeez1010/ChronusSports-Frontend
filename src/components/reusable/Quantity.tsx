import { useState } from 'react';

type QuantityProps = {
  initialQuantity: number;
  onChange: (quantity: number) => void;
};

export default function Quantity({ initialQuantity, onChange }: QuantityProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function incrementQuantity() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  }

  function decrementQuantity() {
    const newQuantity = Math.max(quantity - 1, 0);
    setQuantity(newQuantity);
    onChange(newQuantity);
  }

  return (
    <div className="flex items-center space-x-2 m-auto border-[2px] border-solid border-red-500 rounded-[9px] px-3">
      <button
        onClick={decrementQuantity}
        className="text-white text-[18px] font-bold"
      >
        -
      </button>
      <span className="text-white text-[18px]">{quantity}</span>
      <button
        onClick={incrementQuantity}
        className="text-white text-[18px] font-bold"
      >
        +
      </button>
    </div>
  );
}
