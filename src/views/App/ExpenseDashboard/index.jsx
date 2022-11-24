import { useEffect, useMemo, useCallback, useContext } from "react";
import ExpensesList from "components/ExpensesList/index";
import ExpensesHttp from "http/expenses.http";

import "./index.scss";
import { ExpensesContext } from "context/expenses.ctx";

const ExpenseDashboard = () => {
  const { data, setData } = useContext(ExpensesContext);
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
      <div className="dashboard">
        <h3 className="dashboard__form">Form Component placehodler</h3>
        <ExpensesList className="dashboard__list" expensesData={data} />
      </div>
    </>
  );
};

export default ExpenseDashboard;
