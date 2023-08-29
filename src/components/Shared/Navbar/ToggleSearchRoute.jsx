import { useState } from "react";

export default function ToggleSearchRoute() {
  const [activeToggleRoute, setActiveToggleRoute] = useState("stays");

  return (
    <div>
      <ul className="flex gap-6 text-sm">
        <li
          onClick={() => setActiveToggleRoute("stays")}
          className={`${
            activeToggleRoute == "stays" ? "border-b-black" : ""
          } border-b-2 py-3`}
        >
          Stays
        </li>
        <li
          onClick={() => setActiveToggleRoute("experiences")}
          className={`${
            activeToggleRoute == "experiences" ? "border-b-black" : ""
          } border-b-2 py-3`}
        >
          Experiences
        </li>
        <li
          onClick={() => setActiveToggleRoute("online experiences")}
          className={`${
            activeToggleRoute == "online experiences" ? "border-b-black" : ""
          } border-b-2 py-3`}
        >
          Online Experiences
        </li>
      </ul>
    </div>
  );
}
