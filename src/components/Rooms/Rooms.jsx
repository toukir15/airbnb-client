import { useContext } from "react";
import Container from "../Shared/Container";
import Card from "./Card";
import { CategoryContext } from "../../Providers/CategoryProvider";

export default function Rooms() {
  const { rooms } = useContext(CategoryContext);

  return (
    <Container>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {rooms.map((room, index) => (
          <Card room={room} key={index} />
        ))}
      </div>
    </Container>
  );
}
