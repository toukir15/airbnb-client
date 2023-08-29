import { createContext, useContext, useEffect, useState } from "react";
import { FilterContext } from "./FilterProvider";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [rooms, setRooms] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const {
    propertyType,
    bathroomsQuantity,
    bedsQuantity,
    bedroomsQuantity,
    minPrice,
    maxPrice,
  } = useContext(FilterContext);

  // filter quantity
  const [filterQuantity, setFilterQuantity] = useState(0);

  const handleFilterQuantity = () => {
    setFilterQuantity(0);
    if (bathroomsQuantity) {
      setFilterQuantity(filterQuantity + 1);
      console.log("bathrooms");
    }
    if (bedroomsQuantity) {
      setFilterQuantity(filterQuantity + 1);
      console.log("bedrooms");
    }
    if (bedsQuantity) {
      setFilterQuantity(filterQuantity + 1);
      console.log("bedsQuantity");
    }
    if (minPrice != 0 || maxPrice != 1000) {
      setFilterQuantity(filterQuantity + 1);
      console.log("min max");
    }
    if (propertyType?.length > 0) {
      console.log("property type");
      setFilterQuantity(filterQuantity + propertyType.length);
    }
  };

  useEffect(() => {
    handleFilterQuantity();
  }, [
    bathroomsQuantity,
    bedroomsQuantity,
    bedsQuantity,
    minPrice,
    maxPrice,
    propertyType,
  ]);

  // search api
  const [searchLoading, setSearchLoading] = useState(false);
  useEffect(() => {
    setSearchLoading(true);
    let url = `https://airbnbserver.vercel.app/rooms/${category}`;

    if (searchKeyword) {
      console.log(
        `https://airbnbserver.vercel.app/search/${category}?search_keyword=${searchKeyword}`
      );
      fetch(
        `https://airbnbserver.vercel.app/search/${category}?search_keyword=${searchKeyword}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRooms(data);
          setSearchLoading(false);
        })
        .catch(() => setSearchLoading(false));
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setRooms(data);
          setSearchLoading(false);
        })
        .catch(() => setSearchLoading(false));
    }
  }, [category, searchKeyword]);

  const propertyTypeString = propertyType.join(",");

  // get all data
  const [allDataLoading, setAllDataLoading] = useState(false);
  useEffect(() => {
    setAllDataLoading(true);
    fetch(`https://airbnbserver.vercel.app/rooms/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setAllDataLoading(false);
      })
      .catch(() => setAllDataLoading(false));
  }, [category]);

  // fetch rooms data
  const [roomsDataLoading, setRoomsDataLoading] = useState(false);
  const handleFilter = () => {
    setRoomsDataLoading(true);
    let url = `https://airbnbserver.vercel.app/rooms/${category}`;

    if (
      propertyType.length > 0 ||
      bathroomsQuantity ||
      bedsQuantity ||
      bedroomsQuantity ||
      minPrice ||
      maxPrice
    ) {
      url = `https://airbnbserver.vercel.app/rooms/${category}?bedrooms=${bedroomsQuantity}&beds=${bedsQuantity}&bathrooms=${bathroomsQuantity}&property_type=${propertyTypeString}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setRoomsDataLoading(false);
      })
      .catch(() => setRoomsDataLoading(false));
  };

  // set live time filter product quantity
  const [filterLiveQuantity, setFilterLiveQuantity] = useState(0);
  useEffect(() => {
    let url = `https://airbnbserver.vercel.app/filter/${category}`;

    if (
      propertyType.length > 0 ||
      bathroomsQuantity ||
      bedsQuantity ||
      bedroomsQuantity ||
      minPrice ||
      maxPrice
    ) {
      url = `https://airbnbserver.vercel.app/filter/${category}?bedrooms=${bedroomsQuantity}&beds=${bedsQuantity}&bathrooms=${bathroomsQuantity}&property_type=${propertyTypeString}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setFilterLiveQuantity(data?.result);
        });
    }
  }, [
    category,
    bedroomsQuantity,
    bedsQuantity,
    bathroomsQuantity,
    propertyTypeString,
    minPrice,
    maxPrice,
    propertyType,
  ]);

  // rooms info
  const roomsInfo = {
    rooms,
    category,
    setCategory,
    handleFilter,
    filterLiveQuantity,
    setSearchKeyword,
    roomsDataLoading,
    allDataLoading,
    searchLoading,
  };

  return (
    <CategoryContext.Provider value={roomsInfo}>
      {children}
    </CategoryContext.Provider>
  );
};
