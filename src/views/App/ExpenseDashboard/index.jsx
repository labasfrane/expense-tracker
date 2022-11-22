import ExpensesList from "components/ExpensesList/index";
import NavigationBar from "components/NavigationBar/index";

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

const NavigationItems = [
  { name: "home", path: "" },
  {
    name: "total",
    path: "total",
  },
];

const ExpenseDashboard = () => {
  return (
    <>
      <NavigationBar items={NavigationItems} />
      <div className="dashboard">
        <h3 className="dashboard__form">Form Component placehodler</h3>
        <ExpensesList
          className="dashboard__list"
          expensesData={listOfExpenses}
        />
      </div>
    </>
  );
};

export default ExpenseDashboard;
