import { useContext } from "react";
import PlaceTypes from "../Filters/PlaceTypes";
import PriceRange from "../Filters/PriceRange";
import PropertyType from "../Filters/PropertyType";
import RoomsAndBeds from "../Filters/Rooms&Beds/Rooms&Beds";
import { CategoryContext } from "../../Providers/CategoryProvider";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ModalPopUp({ closeModal }) {
  const { handleFilter, filterLiveQuantity } = useContext(CategoryContext);

  // handle filter functor
  const filterFN = (e) => {
    closeModal(e);
    handleFilter();
  };

  return (
    <>
      <div
        id="modal_1"
        onClick={closeModal}
        className="bg-[#0e0d0d9e] w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50"
      >
        <div className="bg-white rounded-xl w-[55%] h-[90%] border-2  overflow-hidden relative z-50">
          {/* modal harder  */}
          <div className="flex items-center border-b-2 py-2 px-2">
            <button>
              <AiOutlineCloseCircle
                onClick={closeModal}
                id="modal"
                className="text-3xl text-slate-500"
              />
            </button>
            <div className="w-full">
              <p className="text-center">Filters</p>
            </div>
          </div>

          <div className="overflow-y-scroll w-full h-[80%] p-6">
            {/* Apply overflow-auto class */}
            {/* place types  */}
            <div className="pb-8">
              <PlaceTypes />
            </div>
            <div className="pb-8">
              <PriceRange />
            </div>
            <hr />
            {/* rooms and beds  */}
            <div className="pb-8">
              <RoomsAndBeds />
            </div>
            <hr />
            {/* property type   */}
            <div>
              <PropertyType />
            </div>
          </div>

          {/* modal bottom  */}
          <div className="flex justify-between items-center py-3  border-t px-4">
            <div className="font-medium underline cursor-pointer">
              Clear all
            </div>
            <button
              id="modal_2"
              onClick={filterFN}
              className="bg-black text-white px-4 py-2 rounded cursor-pointer "
            >
              show {filterLiveQuantity} places
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
