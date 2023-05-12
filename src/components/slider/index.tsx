import { useState, useEffect } from 'react';
import { Props } from '@/types/marketPlace';


const Slider: React.FC<Props> = ({ min, max, onPriceChange }) => {
  const [minPrice, setMinPrice] = useState<number>(min);
  const [maxPrice, setMaxPrice] = useState<number>(max);

  // useEffect(() => {
  //   onPriceChange({ min: minPrice, max: maxPrice });
  // }, [minPrice, maxPrice, onPriceChange]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = parseInt(event.target.value);
    setMinPrice(newMinPrice);
    onPriceChange({ min: newMinPrice, max: maxPrice });
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(event.target.value);
    setMaxPrice(newMaxPrice);
    onPriceChange({ min: minPrice, max: newMaxPrice });
  };

  return (
    <div className="relative max-w-xl w-full">
      <div className="flex my-6">
        <input
          type="range"
          min={min}
          max={max}
          step={100}
          value={minPrice}
          onChange={handleMinChange}
          className="flex-1 w-full cursor-pointer appearance-none h-1.5 bg-[#5AB9EE]  focus:outline-none"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={100}
          value={maxPrice}
          onChange={handleMaxChange}
          className="flex-1 w-full cursor-pointer appearance-none h-1.5 bg-[#5AB9EE] focus:outline-none"
        />
      </div>
      <div className="flex justify-between mt-2">
        <input
          type="number"
          min={min}
          max={max}
          value={minPrice}
          onChange={handleMinChange}
          className="w-1/3 border-2 border-[#807FD0] bg-transparent text-[14px] font-[300] text-white rounded-md p-1"
        />
        <input
          type="number"
          min={min}
          max={max}
          value={maxPrice}
          onChange={handleMaxChange}
          className="w-1/3 border-2 border-[#807FD0] bg-transparent text-[14px] font-[300] text-white rounded-md p-1"
        />
      </div>
    </div>
  );
};

export default Slider;
