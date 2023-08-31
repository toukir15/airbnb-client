import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function GuestCounter({
  guestCounterArray,
  isAdultChildrenIncrementCounterDisabled,
  isInfantsIncrementCounterDisabled,
  isPetsIncrementCounterDisabled,

  isAdultDecrementCounterDisabled,
  isChildrenDecrementCounterDisabled,
  isInfantsDecrementCounterDisabled,
  isPetsDecrementCounterDisabled,
}) {
  const [value, setValue] = guestCounterArray || [];
  // console.log(value);

  const handleGuestIncrementCounter = () => {
    setValue(value + 1);
  };

  const handleDecrementCounter = () => {
    if (value === 0) {
      return;
    }
    setValue(value - 1);
  };

  return (
    <div className="flex gap-6">
      {/* decrement button  */}
      <button
        disabled={
          isAdultDecrementCounterDisabled ||
          isChildrenDecrementCounterDisabled ||
          isInfantsDecrementCounterDisabled ||
          isPetsDecrementCounterDisabled
        }
        onClick={handleDecrementCounter}
        className={`cursor-pointer h-8 w-8 border rounded-full flex justify-center items-center text-slate-500 ${
          (isAdultDecrementCounterDisabled ||
            isChildrenDecrementCounterDisabled ||
            isInfantsDecrementCounterDisabled ||
            isPetsDecrementCounterDisabled) &&
          "text-slate-100"
        }`}
      >
        <AiOutlineMinus size={20} />
      </button>

      {/* increment decrement value  */}
      <p className="text-xl">{value}</p>

      {/* increment button  */}
      <button
        disabled={
          isAdultChildrenIncrementCounterDisabled ||
          isInfantsIncrementCounterDisabled ||
          isPetsIncrementCounterDisabled
        }
        onClick={handleGuestIncrementCounter}
        className={`cursor-pointer h-8 w-8 border rounded-full flex justify-center items-center text-slate-500 ${
          (isAdultChildrenIncrementCounterDisabled ||
            isInfantsIncrementCounterDisabled ||
            isPetsIncrementCounterDisabled) &&
          "text-slate-100"
        }`}
      >
        <AiOutlinePlus size={20} />
      </button>
    </div>
  );
}
