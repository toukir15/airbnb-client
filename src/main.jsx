import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { CategoryProvider } from "./Providers/CategoryProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CategoryProvider>
    <RouterProvider router={router} />
  </CategoryProvider>
);
