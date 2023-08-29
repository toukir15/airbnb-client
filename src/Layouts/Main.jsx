import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Modal from "../components/Modal/Modal";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Modal />
    </div>
  );
}
