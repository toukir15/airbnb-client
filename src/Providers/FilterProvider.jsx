import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // modal state
  const [showModal, setShowModal] = useState(false);

  // type of place state
  const [typeOfPlace, setTypeOfPlace] = useState("");

  // bedrooms beds bathrooms quantity state
  const [bedroomsQuantity, setBedroomsQuantity] = useState(0);
  const [bedsQuantity, setBedsQuantity] = useState(0);
  const [bathroomsQuantity, setBathroomsQuantity] = useState(0);

  // property type state
  const [propertyType, setPropertyType] = useState([]);

  // price sorting state
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // toggle search filter

  // select region state
  const [region, setRegion] = useState("");

  // date state
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  // guest counter state
  const [adultCounter, setAdultCounter] = useState(0);
  const [childrenCounter, setChildrenCounter] = useState(0);
  const [infantsCounter, setInfantsCounter] = useState(0);
  const [petsCounter, setPetsCounter] = useState(0);

  console.log(adultCounter + childrenCounter);

  const [
    adultCounterAndChildrenCounterSum,
    setAdultCounterAndChildrenCounterSum,
  ] = useState(adultCounter + childrenCounter);
  // console.log(adultCounterAndChildrenCounterSum);

  //adult counter and children counter disabled state
  const [
    isAdultAndChildrenCounterDisabled,
    setIsAdultAndChildrenCounterDisabled,
  ] = useState(false);

  useEffect(() => {
    // adult adn children condition
    if (adultCounterAndChildrenCounterSum <= 16) {
      if (adultCounterAndChildrenCounterSum == 16) {
        setIsAdultAndChildrenCounterDisabled(true);
      } else {
        setIsAdultAndChildrenCounterDisabled(false);
      }
    }

    if (
      adultCounter === 0 &&
      (childrenCounter || infantsCounter || petsCounter)
    ) {
      setAdultCounter(1);
    }
  }, [
    adultCounter,
    childrenCounter,
    infantsCounter,
    petsCounter,
    adultCounterAndChildrenCounterSum,
  ]);

  // rooms info
  const filterInfo = {
    showModal,
    setShowModal,
    typeOfPlace,
    setTypeOfPlace,
    bedroomsQuantity,
    setBedroomsQuantity,
    bedsQuantity,
    setBedsQuantity,
    bathroomsQuantity,
    setBathroomsQuantity,
    propertyType,
    setPropertyType,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,

    // toggle search

    // search by region
    region,
    setRegion,

    // search by date range
    selectedDateRange,
    setSelectedDateRange,

    // search by guest quantity
    adultCounter,
    setAdultCounter,
    childrenCounter,
    setChildrenCounter,
    infantsCounter,
    setInfantsCounter,
    petsCounter,
    setPetsCounter,
    adultCounterAndChildrenCounterSum,

    // adult children increment btn diabled state
    isAdultAndChildrenCounterDisabled,
  };

  return (
    <FilterContext.Provider value={filterInfo}>
      {children}
    </FilterContext.Provider>
  );
};
