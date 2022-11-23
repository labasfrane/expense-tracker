import { useEffect, useState, useMemo, useCallback } from "react";
import ExpensesList from "components/ExpensesList/index";
import NavigationBar from "components/NavigationBar/index";
import ExpensesHttp from "http/expenses.http";

import "./index.scss";

const NavigationItems = [
  { name: "home", path: "" },
  {
    name: "total",
    path: "total",
  },
];

const ExpenseDashboard = () => {
  const [data, setData] = useState([]);
  const expensesHttp = useMemo(() => new ExpensesHttp(), []);

  const fetchExpenses = useCallback(async () => {
    const getExpenses = await expensesHttp.getExpenses();

    setData(getExpenses);
  }, [expensesHttp, setData]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return (
    <>
      <NavigationBar items={NavigationItems} />
      <div className="dashboard">
        <h3 className="dashboard__form">Form Component placehodler</h3>
        <ExpensesList className="dashboard__list" expensesData={data} />
      </div>
    </>
  );
};

export default ExpenseDashboard;
