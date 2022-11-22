import { useState } from "react";
import Modal from "components/Modals/Modal/index";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome/index";
import { faTrash } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import ConfirmationModal from "components/Modals/ConfirmationModal/index";

import "./index.scss";

const ExpenseCard = ({ expense }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const { type, description, value, date } = expense;

  const openModal = (event) => {
    event.stopPropagation();

    setIsModalActive(true);
  };

  const openDeleteModal = (event) => {
    event.stopPropagation();

    setIsDeleteModalActive(true);
  };

  const expenseCardContent = (
    <>
      <h3>{type}</h3>
      <span>{value}</span>
      <span>{description}</span>
      <span>{date}</span>
    </>
  );

  return (
    <>
      {isModalActive && (
        <Modal stateHandler={setIsModalActive}>{expenseCardContent}</Modal>
      )}
      {isDeleteModalActive && (
        <ConfirmationModal stateHandler={setIsDeleteModalActive}>{`Delete ${
          type || "this"
        } expense?`}</ConfirmationModal>
      )}
      <article className="card" onClick={openModal}>
        <FontAwesomeIcon
          className="card__icon"
          icon={faTrash}
          onClick={openDeleteModal}
        />
        {expenseCardContent}
      </article>
    </>
  );
};

export default ExpenseCard;
