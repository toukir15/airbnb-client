import { useContext } from "react";
import GuestCounter from "./GuestCounter";
import { FilterContext } from "../../../../Providers/FilterProvider";

export default function AddGuest() {
  // const [adultCounter, setAdultCounter] = useState(0);
  // const [childrenCounter, setChildrenCounter] = useState(0);
  // const [infantsCounter, setInfantsCounter] = useState(0);
  // const [petsCounter, setPetsCounter] = useState(0);

  const {
    adultCounter,
    setAdultCounter,
    childrenCounter,
    setChildrenCounter,
    infantsCounter,
    setInfantsCounter,
    petsCounter,
    setPetsCounter,
    isAdultAndChildrenCounterDisabled,
  } = useContext(FilterContext);

  return (
    <div>
      <div className="flex justify-between border-b py-6 ">
        <div>
          <p className="font-bold">Adult</p>
          <p>Ages 13 or above</p>
        </div>
        <div>
          <GuestCounter
            isAdultDecrementCounterDisabled={adultCounter == 0}
            isAdultChildrenIncrementCounterDisabled={
              isAdultAndChildrenCounterDisabled
            }
            guestCounterArray={[adultCounter, setAdultCounter]}
          />
        </div>
      </div>
      <div className="flex justify-between border-b py-6">
        <div>
          <p className="font-bold">Children</p>
          <p>Ages 2-12</p>
        </div>
        <div>
          <GuestCounter
            isChildrenDecrementCounterDisabled={childrenCounter == 0}
            isAdultChildrenIncrementCounterDisabled={
              isAdultAndChildrenCounterDisabled
            }
            guestCounterArray={[childrenCounter, setChildrenCounter]}
          />
        </div>
      </div>
      <div className="flex justify-between border-b py-6">
        <div>
          <p className="font-bold">Infants</p>
          <p>Under 2</p>
        </div>
        <div>
          <GuestCounter
            isInfantsDecrementCounterDisabled={infantsCounter == 0}
            isInfantsIncrementCounterDisabled={infantsCounter == 5}
            guestCounterArray={[infantsCounter, setInfantsCounter]}
          />
        </div>
      </div>
      <div className="flex justify-between border-b py-6">
        <div>
          <p className="font-bold">Pets</p>
          <p className="underline">Bring a service animals?</p>
        </div>
        <div>
          <GuestCounter
            isPetsDecrementCounterDisabled={petsCounter == 0}
            isPetsIncrementCounterDisabled={petsCounter == 5}
            guestCounterArray={[petsCounter, setPetsCounter]}
          />
        </div>
      </div>
    </div>
  );
}
