import ExpenseCard from "components/ExpenseCard/index";
import { Expense } from "models/expense.model";

import "./index.scss";

const ExpensesList = ({ expensesData }) => {
  const content = expensesData.map((item) => {
    return (
      <li key={item.id}>
        <ExpenseCard expense={new Expense(item)}></ExpenseCard>
      </li>
    );
  });

  return <ul className="list-containter">{content}</ul>;
};

export default ExpensesList;
