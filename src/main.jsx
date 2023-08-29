import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { CategoryProvider } from "./Providers/CategoryProvider";
import { FilterProvider } from "./Providers/FilterProvider";
import { GlobalProvider } from "./Providers/GlobalProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <FilterProvider>
      <CategoryProvider>
        <RouterProvider router={router} />
      </CategoryProvider>
    </FilterProvider>
  </GlobalProvider>
);
