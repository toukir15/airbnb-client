import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineApartment } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
import { LiaHotelSolid } from "react-icons/lia";
import { useContext } from "react";
import { FilterContext } from "../../Providers/FilterProvider";

export default function PropertyType() {
  const { propertyType, setPropertyType } = useContext(FilterContext);

  // set property type array
  const handlePropertyType = (type) => {
    if (propertyType.includes(type)) {
      setPropertyType(
        propertyType.filter((property) => {
          return property != type;
        })
      );
    } else if (!propertyType.includes(type)) {
      setPropertyType([...propertyType, type]);
    }
    return;
  };

  return (
    <div>
      <h2 className="my-8 text-2xl font-medium">Property types</h2>
      <div className="flex justify-between">
        <div
          onClick={() => handlePropertyType("house")}
          className={`border w-40 h-32 rounded-xl flex flex-col justify-between p-4 hover:border-black cursor-pointer ${
            propertyType.includes("house") ? "border-black border-2" : ""
          } `}
        >
          <AiOutlineHome size={30} />
          <p className="font-medium">House</p>
        </div>
        <div
          onClick={() => handlePropertyType("apartment")}
          className={`border w-40 h-32 rounded-xl flex flex-col justify-between p-4 hover:border-black cursor-pointer ${
            propertyType.includes("apartment") ? "border-black border-2" : ""
          } `}
        >
          <MdOutlineApartment size={30} />
          <p className="font-medium">Apartment</p>
        </div>
        <div
          onClick={() => handlePropertyType("guestHouse")}
          className={`border w-40 h-32 rounded-xl flex flex-col justify-between p-4 hover:border-black cursor-pointer ${
            propertyType.includes("guestHouse") ? "border-black border-2" : ""
          }`}
        >
          <BsHouseAdd size={30} />
          <p className="font-medium">Guesthouse</p>
        </div>
        <div
          onClick={() => handlePropertyType("hotel")}
          className={`border w-40 h-32 rounded-xl flex flex-col justify-between p-4 hover:border-black cursor-pointer ${
            propertyType.includes("hotel") ? "border-black border-2" : ""
          }`}
        >
          <LiaHotelSolid size={30} />
          <p className="font-medium">Hotel</p>
        </div>
      </div>
    </div>
  );
}
