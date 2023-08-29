import { categories } from "./CategoriesData";
import CategoriesBox from "./CategoriesBox";
import filterIcon from "../../assets/filter.png";
import { useContext } from "react";
import { FilterContext } from "../../Providers/FilterProvider";
import Container from "../Shared/Navbar/Container";

export default function Categories() {
  const {
    setShowModal,
    bedroomsQuantity,
    bedsQuantity,
    bathroomsQuantity,
    propertyType,
    minPrice,
    maxPrice,
  } = useContext(FilterContext);

  // const filtersCountCalc = () => {
  //   let filtersCount = 0;
  //   if (bedroomsQuantity > 0) {
  //     filtersCount += 1;
  //   }
  //   if (bedroomsQuantity == 0 && filtersCount) {
  //     filtersCount -= 1;
  //   }
  //   if (bedsQuantity > 0) {
  //     filtersCount += 1;
  //   }
  //   if (bedsQuantity == 0 && filtersCount) {
  //     filtersCount -= 1;
  //   }
  //   if (bathroomsQuantity > 0) {
  //     filtersCount += 1;
  //   }
  //   if (bathroomsQuantity == 0 && filtersCount) {
  //     filtersCount -= 1;
  //   }
  //   return filtersCount;
  // };
  // console.log(filtersCountCalc());

  return (
    <Container>
      <div className="flex items-center justify-center gap-6">
        <div className="flex flex-row items-center gap-10 md:gap-20 overflow-x-auto w-[93%]">
          {categories.map((item) => (
            <CategoriesBox item={item} key={item.label} />
          ))}
        </div>
        <div
          onClick={() => setShowModal(true)}
          className="w-[7%] flex justify-center items-center border-2 border-black py-2 rounded-xl"
        >
          {/* filter btn  */}
          <button className="flex items-center justify-between text-sm ">
            <img className="w-4" src={filterIcon} alt="" />
            <p className="hidden md:block">Filters</p>
          </button>
        </div>
      </div>
    </Container>
  );
}
