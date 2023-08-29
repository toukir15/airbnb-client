import FiltersQuantity from "./FiltersQuantity";
import { useContext } from "react";
import { FilterContext } from "../../../Providers/FilterProvider";

export default function Bathrooms() {
  const { bathroomsQuantity, setBathroomsQuantity } = useContext(FilterContext);
  return (
    <div>
      <p className="my-4">Bathrooms</p>
      <FiltersQuantity valueArray={[bathroomsQuantity, setBathroomsQuantity]} />
    </div>
  );
}
