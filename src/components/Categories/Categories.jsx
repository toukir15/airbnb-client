import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoriesBox from "./CategoriesBox";

export default function Categories() {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoriesBox item={item} key={item.label} />
        ))}
      </div>
    </Container>
  );
}
