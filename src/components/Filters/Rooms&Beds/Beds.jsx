import { useContext } from "react";
import FiltersQuantity from "./FiltersQuantity";
import { FilterContext } from "../../../Providers/FilterProvider";

export default function Beds() {
  const { bedsQuantity, setBedsQuantity } = useContext(FilterContext);
  return (
    <div>
      <p className="my-4">Beds</p>
      <FiltersQuantity valueArray={[bedsQuantity, setBedsQuantity]} />
    </div>
  );
}
