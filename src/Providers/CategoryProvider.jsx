import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [rooms, setRooms] = useState([]);
  console.log(category);

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${category}`)
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, [category]);
  // rooms info
  const roomsInfo = {
    rooms,
    category,
    setCategory,
  };

  return (
    <CategoryContext.Provider value={roomsInfo}>
      {children}
    </CategoryContext.Provider>
  );
};
