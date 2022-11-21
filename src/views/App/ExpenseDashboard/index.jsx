import ExpensesList from "components/ExpensesList/index";

import "./index.scss";

const listOfExpenses = [
  {
    id: 0,
    type: "Food",
    description: "Kruh, mlijeko, ...",
    value: 20,
    date: "November",
  },
  {
    id: 1,
    type: "Food",
    description: "Voda, struja, ...",
    value: 150,
    date: "November",
  },
];

const ExpenseDashboard = () => {
  return (
    <div className="dashboard">
      <h3 className="dashboard__form">Form Component placehodler</h3>
      <ExpensesList className="dashboard__list" expensesData={listOfExpenses} />
    </div>
  );
};

export default ExpenseDashboard;
