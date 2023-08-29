import { useContext } from "react";
import { CategoryContext } from "../../Providers/CategoryProvider";

export default function CategoriesBox({ item }) {
  const { label, icon: Icon } = item || [];
  const { category, setCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => setCategory(label)}
      className={`flex flex-col items-center   hover:text-neutral-800  hover:border-b-[2px] text-neutral-500 cursor-pointer py-3 ${
        category == label
          ? "border-b-[2px] border-neutral-900 text-neutral-800"
          : ""
      }`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
}
