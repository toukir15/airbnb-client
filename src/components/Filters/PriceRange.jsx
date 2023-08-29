import { useContext } from "react";
import { FilterContext } from "../../Providers/FilterProvider";

export default function PriceRange() {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } =
    useContext(FilterContext);

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value);
    if (newMinPrice <= maxPrice) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value);
    if (newMaxPrice >= minPrice) {
      setMaxPrice(newMaxPrice);
    }
  };

  const handleFiltersQuantity = () => {};

  return (
    <div className="w-3/4 mx-auto text-center mt-10">
      <input
        onClick={() => handleFiltersQuantity(true)}
        type="range"
        value={minPrice}
        min={0}
        max={1000}
        onChange={handleMinPriceChange}
        className="w-full"
      />
      <input
        onClick={() => handleFiltersQuantity(true)}
        type="range"
        value={maxPrice}
        min={0}
        max={1000}
        onChange={handleMaxPriceChange}
        className="w-full"
      />
      <div className="flex justify-between mt-3">
        <span>Min Price: ${minPrice}</span>
        <span>Max Price: ${maxPrice}</span>
      </div>
    </div>
  );
}
