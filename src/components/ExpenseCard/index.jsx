import { useState, useContext } from "react";
import { ExpensesContext } from "context/expenses.ctx";
import Modal from "components/Modals/Modal/index";
import ConfirmationModal from "components/Modals/ConfirmationModal/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ExpensesHttp from "http/expenses.http";

import "./index.scss";

const ExpenseCard = ({ expense }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const { id, type, description, value, date } = expense;

  const { data, setData } = useContext(ExpensesContext);
  const expensesHttp = new ExpensesHttp();

  const deleteHandler = async () => {
    const filterDeletedExpenses = data.filter((expense) => expense.id !== id);

    await expensesHttp.deleteExpense(id);
    setData(filterDeletedExpenses);
  };

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
        <ConfirmationModal
          stateHandler={setIsDeleteModalActive}
          onConfirm={deleteHandler}
        >{`Delete ${type || "this"} expense?`}</ConfirmationModal>
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
