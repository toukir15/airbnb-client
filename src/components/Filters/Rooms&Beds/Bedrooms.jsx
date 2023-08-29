import { useContext } from "react";
import FiltersQuantity from "./FiltersQuantity";
import { FilterContext } from "../../../Providers/FilterProvider";

export default function Bedrooms() {
  const { bedroomsQuantity, setBedroomsQuantity } = useContext(FilterContext);
  return (
    <div>
      <p className="my-4">Bedrooms</p>
      <FiltersQuantity valueArray={[bedroomsQuantity, setBedroomsQuantity]} />
    </div>
  );
}
