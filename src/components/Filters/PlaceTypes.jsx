import { useContext } from "react";
import { FilterContext } from "../../Providers/FilterProvider";

export default function PlaceTypes() {
  const { typeOfPlace, setTypeOfPlace } = useContext(FilterContext);

  return (
    <>
      <h2 className="mt-6 text-2xl font-medium mb-2">Type of place</h2>
      <p>
        Search rooms, entire homes and more. Total prices shown for 5 nights
        before taxes.
      </p>
      {/* type of place  */}
      <div className="flex justify-center mt-4">
        <div
          onClick={() => setTypeOfPlace("")}
          className={` ${
            typeOfPlace == "" ? "bg-slate-800 text-white" : ""
          } px-16 flex flex-col items-center justify-center border py-2 rounded-s-lg `}
        >
          <p>Any type</p>
          <p>$936 avg.</p>
        </div>
        <div
          onClick={() => setTypeOfPlace("Room")}
          className={` ${
            typeOfPlace == "Room" ? "bg-slate-800 text-white" : ""
          } px-16 flex flex-col items-center justify-center border py-2`}
        >
          <p>Room</p>
          <p>$3,000 avg.</p>
        </div>
        <div
          onClick={() => setTypeOfPlace("Entire home")}
          className={`  ${
            typeOfPlace == "Entire home" ? "bg-slate-800 text-white" : ""
          } px-16 flex flex-col items-center justify-center border py-2 rounded-e-lg`}
        >
          <p>Entire home</p>
          <p>$778 avg.</p>
        </div>
      </div>
    </>
  );
}
