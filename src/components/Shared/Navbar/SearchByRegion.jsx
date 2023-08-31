import { useContext } from "react";
import { FilterContext } from "../../../Providers/FilterProvider";

export default function SearchByRegion() {
  const { setRegion } = useContext(FilterContext);
  return (
    <div>
      <h6 className="mb-8 font-medium">Search by region</h6>
      <div className="grid grid-cols-3 gap-5">
        <div onClick={() => setRegion("")}>
          <img
            className="w-40 h-32 border hover:border-black rounded-2xl"
            src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
            alt=""
          />
          <p>I'm flexible</p>
        </div>

        <div onClick={() => setRegion("Europe")}>
          <img
            className="w-40 h-32 border hover:border-black rounded-2xl"
            src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
            alt=""
          />
          <p>Europe</p>
        </div>
        <div onClick={() => setRegion("Canada")}>
          <img
            className="w-40 h-32 border hover:border-black rounded-2xl"
            src="https://a0.muscache.com/im/pictures/cd9f2bf0-eefc-4980-b7cb-9c8ca3dae883.jpg?im_w=320"
            alt=""
          />
          <p>Canada</p>
        </div>
        <div onClick={() => setRegion("Southeast Asia")}>
          <img
            className="w-40 h-32 border hover:border-black rounded-2xl"
            src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
            alt=""
          />
          <p>Southeast Asia</p>
        </div>
        <div onClick={() => setRegion("United Kingdom")}>
          <img
            className="w-40 h-32 border hover:border-black rounded-2xl"
            src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320"
            alt=""
          />
          <p>United Kingdom</p>
        </div>
        <div onClick={() => setRegion("United States")}>
          <img
            className="w-40 h-32 border hover:border-black rounded-2xl"
            src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
            alt=""
          />
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}
