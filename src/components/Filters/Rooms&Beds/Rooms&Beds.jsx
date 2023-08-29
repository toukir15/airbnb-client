import Bathrooms from "./BathRooms";
import Bedrooms from "./Bedrooms";
import Beds from "./Beds";

export default function RoomsAndBeds() {
  return (
    <div>
      <h3 className="mt-4 text-2xl font-medium">Rooms and beds</h3>
      <Bedrooms />
      <Beds />
      <Bathrooms />
    </div>
  );
}
