import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // modal state
  const [showModal, setShowModal] = useState(false);

  // bedrooms beds bathrooms quantity state
  const [bedroomsQuantity, setBedroomsQuantity] = useState(0);
  const [bedsQuantity, setBedsQuantity] = useState(0);
  const [bathroomsQuantity, setBathroomsQuantity] = useState(0);

  // property type state
  const [propertyType, setPropertyType] = useState([]);

  // price sorting state
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // rooms info
  const filterInfo = {
    showModal,
    setShowModal,
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
  };

  return (
    <FilterContext.Provider value={filterInfo}>
      {children}
    </FilterContext.Provider>
  );
};
