import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import CardLoading from "../Loading/CardLoading";

import { CategoryContext } from "../../Providers/CategoryProvider";
import Container from "../Shared/Navbar/Container";

export default function Rooms() {
  const { rooms, roomsDataLoading, allDataLoading, searchLoading } =
    useContext(CategoryContext);
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetch(`rooms.json`)
      .then((res) => res.json())
      .then((data) => setRoomsData(data));
  }, []);

  return (
    <Container>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {roomsDataLoading || allDataLoading || searchLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => <CardLoading key={i} />)
          : rooms.map((room, index) => <Card room={room} key={index} />)}
        {/* {roomsData.map((room, index) => (
          <Card room={room} key={index} />
        ))} */}
      </div>
    </Container>
  );
}
