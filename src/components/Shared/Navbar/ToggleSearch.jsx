import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GlobalContext } from "../../../Providers/GlobalProvider";

// import from react date range
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DateRange from "./DateRange";
import { CategoryContext } from "../../../Providers/CategoryProvider";

export default function ToggleSearch() {
  const { isToggleSearch, setIsToggleSearch } = useContext(GlobalContext);
  const { setSearchKeyword } = useContext(CategoryContext);
  const [isOpenDate, setIsOpenDate] = useState(false);

  const [activeToggleRoute, setActiveToggleRoute] = useState("");

  return (
    <div>
      {/* toggle search  */}
      {isToggleSearch && (
        <>
          <div className="w-full bg-white pt-5 pb-3">
            <div className="w-[70%] mx-auto border rounded-full text-sm ">
              <div className=" flex">
                {/* where  */}
                <div
                  onClick={() => setActiveToggleRoute("where")}
                  className="w-[40%] flex cursor-pointer items-center  py-2 hover:bg-[#EBEBEB] group rounded-full"
                >
                  <div className="pl-8 border-r w-full ">
                    <span className="font-medium">Where</span>
                    <input
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className=" flex outline-none group-hover:bg-[#EBEBEB]"
                      type="text"
                      placeholder="Search destination"
                    />
                  </div>
                </div>
                {/* check in  */}
                <div
                  onClick={() => {
                    setIsOpenDate(!isOpenDate);
                    setActiveToggleRoute("checkIn");
                  }}
                  className="w-[20%] pl-6 cursor-pointer  hover:bg-[#EBEBEB] rounded-full py-2 "
                >
                  <div className="w-full border-r">
                    <p className="font-medium">Check in</p>
                    <p className="text-gray-500">Add dates</p>
                  </div>
                </div>
                {/* check out  */}
                <div
                  onClick={() => setActiveToggleRoute("checkOut")}
                  className="w-[20%] pl-6 cursor-pointer hover:bg-[#EBEBEB] rounded-full py-2 "
                >
                  <div className="w-full border-r">
                    <p className="font-medium">Check out</p>
                    <p className="text-gray-500">Add dates</p>
                  </div>
                </div>
                {/* add guest  */}
                <div
                  onClick={() => setActiveToggleRoute("addGuest")}
                  className="w-[40%] pl-6 cursor-pointer hover:bg-[#EBEBEB] rounded-full flex justify-between items-center  py-2 px-4"
                >
                  <div>
                    <p className="font-medium">Who</p>
                    <p className="text-gray-500">Add guest</p>
                  </div>
                  <div
                    onClick={() => setIsToggleSearch(!isToggleSearch)}
                    className="bg-rose-500 p-2 rounded-full text-white flex justify-center items-center"
                  >
                    <AiOutlineSearch size={26} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* date range picker  */}
          {isOpenDate && (
            <div className=" w-[893px]  mx-auto mt-4 border-2 rounded-full">
              <DateRange />
            </div>
          )}
        </>
      )}
    </div>
  );
}
