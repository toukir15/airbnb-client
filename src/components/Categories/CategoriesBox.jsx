import { useContext } from "react";
import { CategoryContext } from "../../Providers/CategoryProvider";

export default function CategoriesBox({ item }) {
  const { label, icon: Icon } = item || [];
  const { category, setCategory } = useContext(CategoryContext);
  console.log(category, label);
  return (
    <div
      onClick={() => setCategory(label)}
      className={`flex flex-col items-center gap-2 p-3 border-b-2 hover:text-neutral-800  text-neutral-500 cursor-pointer  ${
        category != label
          ? "hover:border-b-[2px] hover:border-neutral-200 "
          : ""
      } ${
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
