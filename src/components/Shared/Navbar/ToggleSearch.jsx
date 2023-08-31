import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GlobalContext } from "../../../Providers/GlobalProvider";

// import from react date range
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DateRange from "./DateRange";
import { CategoryContext } from "../../../Providers/CategoryProvider";

import "./DateRange.css";
import SearchByRegion from "./SearchByRegion";
import { FilterContext } from "../../../Providers/FilterProvider";
import AddGuest from "./AddGuest/AddGuest";

export default function ToggleSearch() {
  const {
    region,
    adultCounterAndChildrenCounterSum,
    infantsCounter,
    petsCounter,
  } = useContext(FilterContext);
  console.log(adultCounterAndChildrenCounterSum);

  const { isToggleSearch, setIsToggleSearch } = useContext(GlobalContext);
  const { setSearchKeyword, handleSearch } = useContext(CategoryContext);

  const [isSearchByRegion, setIsSearchByRegion] = useState(false);
  // const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenCheckIn, setIsOpenCheckIn] = useState(false);
  const [isOpenCheckout, setIsOpenCheckOut] = useState(false);
  const [isAddGuest, setIsAddGuest] = useState(false);

  // handle toggle search
  const handleToggleSearch = (option) => {
    // region
    if (option == "region") {
      setIsSearchByRegion(true);
    } else {
      setIsSearchByRegion(false);
    }

    // check in
    if (option == "checkIn") {
      setIsOpenCheckIn(true);
    } else {
      setIsOpenCheckIn(false);
    }

    // check out
    if (option == "checkOut") {
      setIsOpenCheckOut(true);
    } else {
      setIsOpenCheckOut(false);
    }

    // add guest
    if (option == "addGuest") {
      setIsAddGuest(true);
    } else {
      setIsAddGuest(false);
    }
  };

  return (
    <div>
      {/* toggle search  */}
      {isToggleSearch && (
        <>
          <div className="w-full bg-white pt-5 pb-3">
            <div className="w-[70%] mx-auto border rounded-full bg-[#EBEBEB] text-sm ">
              <div className=" flex">
                {/* where  */}
                <div
                  className={` ${
                    isSearchByRegion ? "bg-white shadow-2xl" : "bg-[#EBEBEB]"
                  } w-[40%] flex cursor-pointer items-center  py-2 group rounded-full`}
                >
                  <div
                    onClick={() => {
                      handleToggleSearch("region");
                    }}
                    className="pl-8 border-r w-full "
                  >
                    <span className="font-medium">Where</span>
                    <input
                      onClick={(e) => setSearchKeyword(e.target.value)}
                      className={`flex outline-none bg-[#ffffff00] `}
                      type="text"
                      placeholder="Search destination"
                      value={region}
                    />
                  </div>
                </div>

                {/* check in  */}
                <div
                  onClick={() => {
                    handleToggleSearch("checkIn");
                  }}
                  className={` ${
                    isOpenCheckIn ? "bg-white shadow-3xl" : "bg-[#EBEBEB]"
                  }  w-[20%] pl-6 cursor-pointer  rounded-full py-2 `}
                >
                  <div className="w-full border-r">
                    <p className="font-medium">Check in</p>
                    <p className="text-gray-500">Add dates</p>
                  </div>
                </div>

                {/* check out  */}
                <div
                  onClick={() => {
                    handleToggleSearch("checkOut");
                  }}
                  className={` ${
                    isOpenCheckout ? "bg-white shadow-3xl" : "bg-[#EBEBEB]"
                  }  w-[20%] pl-6 cursor-pointer  rounded-full py-2 `}
                >
                  <div className="w-full border-r">
                    <p className="font-medium">Check out</p>
                    <p className="text-gray-500">Add dates</p>
                  </div>
                </div>

                {/* add guest  */}
                <div
                  onClick={() => handleToggleSearch("addGuest")}
                  className={` ${
                    isAddGuest ? "bg-white shadow-3xl" : "bg-[#EBEBEB]"
                  } w-[40%] pl-6 cursor-pointer  rounded-full flex justify-between items-center  py-2 px-4`}
                >
                  <div>
                    <p className="font-medium">Who</p>
                    <p className="text-gray-500">
                      {adultCounterAndChildrenCounterSum
                        ? `${adultCounterAndChildrenCounterSum} guests`
                        : "Add guest"}
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      handleSearch();
                      setIsToggleSearch(!isToggleSearch);
                    }}
                    className="bg-rose-500 p-2 rounded-full text-white flex justify-center items-center"
                  >
                    <AiOutlineSearch size={26} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* search by region  */}
          {isSearchByRegion && (
            <div className="w-[500px]  bg-white p-8 absolute top-44 left-64 shadow-xl rounded-3xl">
              <SearchByRegion />
            </div>
          )}

          {/* date range picker  */}
          {isOpenCheckIn || isOpenCheckout ? (
            <div className="absolute z-50 left-1/2 -translate-x-1/2 w-[800px] mx-auto mt-2 rounded-full">
              <DateRange />
            </div>
          ) : null}

          {/* add guest  */}
          {isAddGuest && (
            <div className="w-[500px] bg-white p-8 absolute right-64 top-44 shadow-xl rounded-3xl">
              <AddGuest />
            </div>
          )}
        </>
      )}
    </div>
  );
}
