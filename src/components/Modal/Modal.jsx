import { useContext } from "react";
import ModalPopUp from "./ModalPopUp";
import { FilterContext } from "../../Providers/FilterProvider";

export default function Modal() {
  const { showModal, setShowModal } = useContext(FilterContext);
  // close modal fn
  const closeModal = (e) => {
    e.stopPropagation();
    if (
      e.target.id == "modal" ||
      e.target.id == "modal_1" ||
      e.target.id == "modal_2"
    ) {
      setShowModal(false);
    }
  };

  return <div>{showModal && <ModalPopUp closeModal={closeModal} />}</div>;
}
